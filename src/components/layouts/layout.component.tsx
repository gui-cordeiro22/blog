// Dependencies
import React, { Fragment, FunctionComponent, useState } from "react";
import { useLocation } from "react-router-dom";

// Components
import { Navbar } from "../compositions/navbar";
import { Link } from "../elements/link";
import { Footer } from "../compositions/footer";

// Utils
import { navbarData } from "../../mocks/navbar.mocks";

// Types
import { LayoutProps } from "./layout.types";

export const Layout: FunctionComponent<LayoutProps> = ({ contentPage }) => {
  const location = useLocation();

  return (
    <Fragment>
      <Navbar
        logo="Entre | Linhas"
        linksCompositions={(navbarData ?? []).map((item, index) => (
          <Link
            key={`navbar-link-${index}`}
            name={item.name}
            href={item.href}
            isActive={location.pathname === item.href}
          />
        ))}
      />

      {contentPage}

      <Footer
        headline="Escreva sobre o que você tem interesse!"
        copyrightMessage={`© Todos os direitos reservados | Entre Linhas 2025`}
      />
    </Fragment>
  );
};
