import { MyLabel } from "../../components/MyLabel";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Forms/Labels",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    customFontColor: { color: "color", defaultValue: "" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false,
};

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "h2",
  allCaps: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: "tertiary",
};

export const CustomFormColor = Template.bind({});
CustomFormColor.args = {
  size: "h1",
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: "h1",
  customFontColor: "white",
  backgroundColor: "black",
};
