import { Accordion } from ".";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {
    state: {
      options: ["closed", "open"],
      control: { type: "select" },
    },
    theme: {
      options: ["dark"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    label: "Label",
    state: "closed",
    theme: "dark",
    className: {},
    chevronUp4Color: "white",
  },
};
