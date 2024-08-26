import React from "react";
import { addons, types } from "@storybook/addons";
import { AddonPanel } from "@storybook/components";
import CommentAddon from "./CommentAddon";

const CommentPanel = (props: any) => {
  return (
    <AddonPanel {...props}>
      <CommentAddon />
    </AddonPanel>
  );
};

addons.register("storybook/comment-addon", () => {
  addons.add("storybook/comment-panel", {
    title: "Comments",
    type: types.PANEL,
    render: CommentPanel,
  });
});
