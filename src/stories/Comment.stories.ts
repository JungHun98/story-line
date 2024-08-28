import type { Meta, StoryObj } from "@storybook/react";
import Comment from "../addons/storyLineComments/container/Comment";

const meta = {
  title: "Example/TextBox",
  component: Comment,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CommentBox: Story = {
  parameters: {},
  args: {
    id: 1,
    content: "",
    isSameUser: true,
  },
};
