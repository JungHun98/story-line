import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import EditButton from "../addons/storyLineComments/components/EditButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: EditButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    innerText: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof EditButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Update: Story = {
  args: {
    innerText: "수정",
  },
};

export const Delete: Story = {
  args: {
    innerText: "삭제",
  },
};

export const Create: Story = {
  args: {
    innerText: "피드백 등록",
  },
};
