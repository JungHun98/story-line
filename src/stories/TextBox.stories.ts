import type { Meta, StoryObj } from "@storybook/react";
import TextBox from "../addons/storyLineComments/components/TextBox";

const meta = {
  title: "Example/TextBox",
  component: TextBox,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TextBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextArea: Story = {
  args: {
    text: "",
    isEdited: true,
  },
};
