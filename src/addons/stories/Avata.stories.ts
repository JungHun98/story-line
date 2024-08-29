import type { Meta, StoryObj } from "@storybook/react";
import Avata from "../components/Avata";

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
    imageSrc:
      "https://lh3.googleusercontent.com/a/ACg8ocJHMjcbMmsGk1fPCYUDUENNn749ieiSxnFByp0qQXWuQN3fGQ=s576-c-no",
  },
};
