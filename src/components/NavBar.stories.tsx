import React from "react";
import NavBar, { INavBarUser } from "./NavBar";
import { Meta, Story } from "@storybook/react/types-6-0";
import "bootstrap/dist/css/bootstrap.min.css";

export default {
  title: "Example/NavBar",
  component: NavBar,
} as Meta;

const Template: Story<INavBarUser> = (args) => <NavBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  Name: "Sam",
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
};