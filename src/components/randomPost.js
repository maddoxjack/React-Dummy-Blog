import React from "react";
import PostData from "./postData";

//functional layout that receives props
const RandomPostLayout = props => {
  console.log("post layout props are", props);
  const { match, posts } = props;
  const postId = Math.floor(Math.random() * posts.default.length);
  return posts.default.map(post => {
    if (post.id === postId) {
      return <PostData postData={post} key={`post-id-${postId}`} />;
    } else {
      return null;
    }
  });
};

export default RandomPostLayout;
