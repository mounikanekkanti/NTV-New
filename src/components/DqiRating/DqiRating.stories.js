import { DqiRating } from ".";

export default {
  title: "Components/DqiRating",
  component: DqiRating,
  argTypes: {
    rating: {
      options: ["poor", "best", "fair", "good"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    rating: "poor",
    className: {},
  },
};
