import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
    posts: [] //because you can map an empty array before the state initiates
  };

  componentDidMount() {
    const { posts } = this.props;

    this.setState({
      posts: posts.default
    });
  }

  //have a render method because it's stateful component
  render() {
    const { posts, showDetails, postData } = this.state; //deconstructing the state
    return (
      <PostList>
        {posts.map((post, index) => {
          return (
            <li key={index}>
              <Link to={`/post/${post.id}`}>{post.post_title}</Link>
            </li>
          );
        })}
      </PostList>
    );
  }
}

export default ListLayout;

ListLayout.propTypes = {
  posts: PropTypes.object
};
