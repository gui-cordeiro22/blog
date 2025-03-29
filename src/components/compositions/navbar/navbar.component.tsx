// Dependencies
import React, { FunctionComponent } from "react";

// Styles
import {
  Container,
  ContentWrapper,
  LinksCompositionsWrapper,
  Logo,
} from "./navbar.styles";

// Types
import { NavbarProps } from "./navbar.types";

export const Navbar: FunctionComponent<NavbarProps> = ({
  logo,
  linksCompositions,
}) => {
  return (
    <Container>
      <ContentWrapper>
        {/* <Logo src={logo} alt="" /> */}
        <p>{logo}</p>

        <LinksCompositionsWrapper>{linksCompositions}</LinksCompositionsWrapper>
      </ContentWrapper>
    </Container>
  );
};
