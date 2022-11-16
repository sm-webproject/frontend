import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import Editor from "../components/Editor";

export default {
  title: "Devfive/Editor",
  component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor {...args} />;

export const Main = Template.bind({});

Main.args = {
  defaultValue: "small",
};
