import { Toggle } from ".";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    state: {
      options: ["disable", "hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    lable: true,
    state: "disable",
    active: true,
    className: {},
    buttonClassName: {},
    toggleBaseClassName: {},
  },
};
