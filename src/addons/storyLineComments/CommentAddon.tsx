import React, { useState, useEffect, memo } from "react";
import { useStorybookState } from "@storybook/api";
import supabase from "../../utils/supabase";
import Login from "./Login";
import { Comment } from "../../../@types/comment";

const CommentAddon = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const state = useStorybookState();

  useEffect(() => {
    const getComments = async () => {
      let { data, error } = await supabase
        .from("Comment")
        .select("*")
        .eq("story_id", state.storyId);

      const comments: Comment[] = data!;
      setComments(comments.map((elem) => elem.description));
    };

    getComments();
  }, [state.storyId]);

  const handleAddComment = async () => {
    if (newComment) {
      const { data, error } = await supabase
        .from("Comment")
        .insert([{ description: newComment, story_id: state.storyId }])
        .select();

      setNewComment("");
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <div>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleAddComment}>Add</button>
        <Login></Login>
      </div>

      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default memo(CommentAddon);
