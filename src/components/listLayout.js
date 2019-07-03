import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import PostData from "./postData";
//making this a stateful component so we can keep track of the details view in this component

const PostList = styled.ul`
  flex: 0 1 25%;
  list-style-type: none;
  margin: 0;
  text-align: left;

  li {
    padding: 4px 0;
    margin: 4px 0;
    width: 100%;
  }
`; //nested style so every li inside this UL will be styled like this

const PostDetails = styled.div`
  flex: 1;
  margin: 0;

  p {
    margin: 4px 0;
    padding: 4px 0;
  }
`;

class ListLayout extends Component {
  state = {
    showDetails: false,
    posts: [], //because you can map an empty array before the state initiates
    postData: null //because it will be an object
  };

  componentDidMount() {
    const { posts } = this.props;

    this.setState({
      posts: posts.default
    });
  }

  loadPost = post => {
    console.log("the post is", post);
    this.setState({
      showDetails: true,
      postData: post
    });
  }; //doesn't need prevent default behaviour as it is binded to this event because of react

  //have a render method because it's stateful component
  render() {
    const { posts, showDetails, postData } = this.state; //deconstructing the state
    return (
      <>
        <PostList>
          {posts.map((post, index) => {
            return (
              <li key={index}>
                <a href="#" onClick={() => this.loadPost(post)}>
                  {post.post_title}
                </a>
              </li>
            );
          })}
        </PostList>
        <PostDetails>
          {!!showDetails && !!postData ? (
            <PostData postData={postData} />
          ) : (
            <p>Please select an entry</p>
          )}
        </PostDetails>
      </>
    );
  }
}

export default ListLayout;

ListLayout.propTypes = {
  posts: PropTypes.object
};
