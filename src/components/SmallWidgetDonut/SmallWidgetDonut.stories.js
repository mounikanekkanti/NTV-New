import { SmallWidgetDonut } from ".";

export default {
  title: "Components/SmallWidgetDonut",
  component: SmallWidgetDonut,
  argTypes: {
    type: {
      options: ["DQI", "line", "donut"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "DQI",
    className: {},
    text: "Data Quality",
    DQIRatingRating: "best",
    text1: "Title",
    text2: "Subtext",
    pieChartOverlapGroupClassName: {},
  },
};
