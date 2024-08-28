import type { Meta, StoryObj } from "@storybook/react";
import TextArea from "../addons/storyLineComments/components/TextArea";

const meta = {
  title: "Example/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Comment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextAreaBox: Story = {};
