// Dependencies
import React, { FunctionComponent } from "react";

// Types
import { FooterProps } from "./footer.types";

export const Footer: FunctionComponent<FooterProps> = ({
  headline,
  copyrightMessage,
}) => {
  return (
    <>
      {headline}

      {copyrightMessage}
    </>
  );
};
