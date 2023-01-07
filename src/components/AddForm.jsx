import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addpost } from "../reducer/slice";
import { nanoid } from "@reduxjs/toolkit";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const titleChange = (e) => {
    setTitle(e.target.value);
  };
  const contentChange = (e) => {
    setContent(e.target.value);
  };
  const authorChange = (e) => {
    setAuthor(e.target.value);
  };

  const addPostFunc = () => {
    if (title && content) {
      dispatch(addpost({ id: nanoid(), title, content, author }));
    }
  };

  return (
    <section className="add-post">
      <h2 className="heading text-center">📌Bulletin Board</h2>
      <div className="form flex-center box">
        <input
          type="text"
          value={title}
          className="add-title"
          placeholder="Enter title"
          onChange={titleChange}
        />
        <input
          type="text"
          value={content}
          className="add-content"
          placeholder="Enter content"
          onChange={contentChange}
        />
        <select
          name="author"
          id="author"
          value={author}
          onChange={authorChange}
        >
          {posts.map((post) => {
            return (
              <option key={post.id} value={post.author}>
                {post.author}
              </option>
            );
          })}
        </select>
        <button className="add-btn" onClick={addPostFunc}>
          Add Post
        </button>
      </div>
    </section>
  );
};

export default AddForm;
