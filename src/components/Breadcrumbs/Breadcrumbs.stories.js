import { Breadcrumbs } from ".";

export default {
  title: "Components/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    type: {
      options: ["truncated-long", "truncated-small", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "truncated-long",
    className: {},
    text: "Item 2",
    text1: "Item 3",
    text2: "Item 4",
    visible: true,
    hasText: true,
    visible1: true,
    hasDiv: true,
    homeLine1Color: "#98A2B3",
    chevronRight25Color: "#98A2B3",
    chevronRight25Stroke: "#98A2B3",
    chevronRight25Color1: "#98A2B3",
    chevronRight25Color2: "#98A2B3",
    chevronRight25Color3: "#98A2B3",
    visible2: true,
    hasText1: true,
    visible3: true,
    hasText2: true,
    visible4: true,
    hasText3: true,
    visible5: true,
    hasText4: true,
    chevronRight25Color4: "#98A2B3",
    chevronRight25Color5: "#98A2B3",
  },
};
