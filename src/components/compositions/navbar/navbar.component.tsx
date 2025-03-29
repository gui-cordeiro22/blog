// Dependencies
import React, { FunctionComponent } from "react";

// Styles
import { Container, LinksCompositionsWrapper, Logo } from "./navbar.styles";

// Types
import { NavbarProps } from "./navbar.types";

export const Navbar: FunctionComponent<NavbarProps> = ({
  logo,
  linksCompositions,
}) => {
  return (
    <Container>
      <Logo src={logo} alt="" />

      <LinksCompositionsWrapper>{linksCompositions}</LinksCompositionsWrapper>
    </Container>
  );
};
