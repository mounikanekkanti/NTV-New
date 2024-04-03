import { SubNavItems } from ".";

export default {
  title: "Components/SubNavItems",
  component: SubNavItems,
  argTypes: {
    state: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Label",
    state: "inactive",
    className: {},
    categoryClassName: {},
    chevronLeft4Color: "white",
  },
};
