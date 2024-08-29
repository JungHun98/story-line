import type { Meta, StoryObj } from "@storybook/react";
import CommentBox from "../container/CommentBox";

const meta = {
  title: "Example/CommentBox",
  component: CommentBox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CommentContainer: Story = {
  parameters: {},
  args: {
    id: 1,
    imageSrc:
      "https://lh3.googleusercontent.com/a/ACg8ocJHMjcbMmsGk1fPCYUDUENNn749ieiSxnFByp0qQXWuQN3fGQ=s192-c-br100-rg-mo",
    content:
      "hellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohellohello",
    isSameUser: true,
  },
};
