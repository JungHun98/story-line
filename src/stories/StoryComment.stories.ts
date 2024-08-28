import type { Meta, StoryObj } from "@storybook/react";
import StroyComment from "../addons/storyLineComments/container/StoryComment";

const meta = {
  title: "Example/StoryComment",
  component: StroyComment,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof StroyComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contanier: Story = {
  args: {
    isLogin: true,
  },
};
