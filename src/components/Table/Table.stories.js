import { Table } from ".";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    property1: {
      options: ["dashboard", "classic-table"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "dashboard",
    className: {},
    nameClassName: {},
    text: "Table",
    text1: "Subtext",
    text2: "Row 1",
    text3: "100,000",
    text4: "Row 2",
    text5: "Row 3",
    text6: "Row 4",
    text7: "Row 5",
    text8: "DATA TYPE",
    text9: "25%",
    inputType: "text",
  },
};
