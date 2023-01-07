import React from "react";
import Emojis from "./Emojis";

const Posts = ({ id, title, content, author, emojiCount }) => {
  return (
    <div className="post flex-center box">
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <p className="post-author">-{author}</p>
      <Emojis postId={id} emojiCount={emojiCount} />
    </div>
  );
};

export default Posts;
