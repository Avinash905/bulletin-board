import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "lorem",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,sapiente",
    author: "Michael",
    emojis: {
      thumbsUp: 0,
      laugh: 0,
      love: 0,
    },
  },
  {
    id: 2,
    title: "lorem2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,sapiente adipisicing elit. Eveniet,sapiente",
    author: "Fredrick",
    emojis: {
      thumbsUp: 0,
      laugh: 0,
      love: 0,
    },
  },
];

export const postReducer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addpost: (state, action) => {
      state.push(action.payload);
    },
    incEmojiCount: (state, action) => {
      const existingPost = state.find((post) => {
        return action.payload.postId === post.id;
      });
      if (existingPost) {
        existingPost.emojis[action.payload.emoji]++;
      }
    },
  },
});

export const { addpost, incEmojiCount } = postReducer.actions;
export default postReducer.reducer;
