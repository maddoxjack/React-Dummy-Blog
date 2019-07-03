import React, { Component } from "react";
import PropTypes from "prop-types";
//making this a stateful component so we can keep track of the details view in this component

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

  //have a render method because it's stateful component
  render() {
    const { posts, showDetails, postData } = this.state; //deconstructing the state
    return (
      <div>
        <ul>
          {posts.map((post, index) => {
            return <li key={index}> {post.post_title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default ListLayout;

ListLayout.propTypes = {
  posts: PropTypes.object
};
