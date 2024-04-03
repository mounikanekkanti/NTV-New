import { ColumnWidget } from ".";

export default {
  title: "Components/ColumnWidget",
  component: ColumnWidget,
  argTypes: {
    size: {
      options: ["tall", "compact"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    size: "tall",
    className: {},
    barChart: "/img/bar-chart-2.svg",
    contentClassName: {},
  },
};
