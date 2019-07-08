import React from "react";
import PostData from "./postData";

//functional layout that receives props
const PostLayout = props => {
  console.log("post layout props are", props);
  const { match, posts } = props;
  const postId = parseInt(match.params.id);
  return posts.default.map(post => {
    if (post.id === postId) {
      return <PostData postData={post} key={`post-id-${postId}`} />;
    } else {
      return null;
    }
  });
};

export default PostLayout;
