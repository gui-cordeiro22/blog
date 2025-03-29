// Dependencies
import React, { FunctionComponent } from "react";

// Types
import { LinkProps } from "./link.types";

export const Link: FunctionComponent<LinkProps> = ({ name, href }) => {
  return <a href={href}>{name}</a>;
};
