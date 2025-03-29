// Dependencies
import React, { FunctionComponent, useState } from "react";

// Styles
import { LinkElement } from "./link.styles";

// Types
import { LinkProps } from "./link.types";

export const Link: FunctionComponent<LinkProps> = ({
  name,
  href,
  isActive,
}) => {
  return (
    <LinkElement href={href} isActive={isActive}>
      {name}
    </LinkElement>
  );
};
