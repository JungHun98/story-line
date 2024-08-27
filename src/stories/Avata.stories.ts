import type { Meta, StoryObj } from "@storybook/react";
import Avata from "../addons/storyLineComments/components/Avata";

const meta = {
  title: "Example/Avata",
  component: Avata,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Avata>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Profile: Story = {
  args: {
    imageSrc: "",
  },
};
