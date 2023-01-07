import React from "react";
import { useSelector } from "react-redux";
import Posts from "./Post";

const AllPosts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <section className="posts-section">
      <h2 className="heading text-center">All Posts</h2>
      <div className="posts-cont">
        {posts.map((post) => {
          return (
            <Posts
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              emojiCount={post.emojis}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllPosts;
