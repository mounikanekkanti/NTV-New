import { WidgetGroup } from ".";

export default {
  title: "Components/WidgetGroup",
  component: WidgetGroup,
  argTypes: {
    type: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "default",
    className: {},
    columnWidgetBarChart: "/img/bar-chart-1.svg",
    smallWidgetDonutPieChartOverlapGroupClassName: {},
  },
};
