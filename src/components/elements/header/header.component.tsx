// Dependencies
import React, { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "../../utilities/conditionally-render";

// Styles
import { Container, ContentWrapper, Headline, Title } from "./header.styles";

// Types
import { HeaderProps } from "./header.types";

export const Header: FunctionComponent<HeaderProps> = ({ title, headline }) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>{title}</Title>

        <ConditionallyRender
          shouldRender={!!headline}
          content={<Headline>{headline}</Headline>}
        />
      </ContentWrapper>
    </Container>
  );
};
