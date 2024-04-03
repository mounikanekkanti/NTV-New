import { SearchBar } from ".";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
  argTypes: {
    type: {
      options: ["filled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    showChevronDown: true,
    type: "filled",
    searchButton: true,
    className: {},
    search5Color: "#98A2B3",
    chevronDownColor: "#98A2B3",
    text: "Search here",
  },
};
