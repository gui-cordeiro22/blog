// Dependencies
import React, { FunctionComponent } from "react";

// Styles
import {
  Container,
  ContentWrapper,
  CopyrightMessage,
  Headline,
} from "./footer.styles";

// Types
import { FooterProps } from "./footer.types";

export const Footer: FunctionComponent<FooterProps> = ({
  headline,
  copyrightMessage,
}) => {
  return (
    <Container>
      <ContentWrapper>
        <Headline>{headline}</Headline>

        <CopyrightMessage>{copyrightMessage}</CopyrightMessage>
      </ContentWrapper>
    </Container>
  );
};
