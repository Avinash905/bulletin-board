import React from "react";
import { useDispatch } from "react-redux";
import { incEmojiCount } from "../reducer/slice";

const Emojis = ({ postId, emojiCount }) => {
  const dispatch = useDispatch();
  const emojis = {
    thumbsUp: "👍",
    laugh: "😂",
    love: "❤️",
  };

  return (
    <div className="emojis-cont">
      {Object.keys(emojis).map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => {
              dispatch(incEmojiCount({ postId, emoji }));
            }}
          >
            {emojis[emoji]}
            {emojiCount[emoji]}
          </span>
        );
      })}
    </div>
  );
};

export default Emojis;
