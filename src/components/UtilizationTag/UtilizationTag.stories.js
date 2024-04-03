import { UtilizationTag } from ".";

export default {
  title: "Components/UtilizationTag",
  component: UtilizationTag,
  argTypes: {
    color: {
      options: [
        "warning-2",
        "critical",
        "warning-3",
        "success-2",
        "blue-2",
        "default",
        "warning-1",
        "error-2",
        "warning-4",
        "success-1",
        "error-1",
        "blue-1",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "warning-2",
    active: true,
  },
};
