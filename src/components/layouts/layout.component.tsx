// Dependencies
import React, { Fragment, FunctionComponent } from "react";

// Components
import { Navbar } from "../compositions/navbar";
import { Link } from "../elements/link";
import { Footer } from "../compositions/footer";

// Utils
import { navbarData } from "../../mocks/navbar.mocks";

// Types
import { LayoutProps } from "./layout.types";

export const Layout: FunctionComponent<LayoutProps> = ({ contentPage }) => {
  return (
    <Fragment>
      <Navbar
        logo="teste"
        linksCompositions={(navbarData ?? []).map((item, index) => (
          <Link
            key={`navbar-link-${index}`}
            name={item.name}
            href={item.href}
          />
        ))}
      />

      {contentPage}

      <Footer
        headline="Escreva sobre o que você tem interesse!"
        copyrightMessage={`Blog © 2025`}
      />
    </Fragment>
  );
};
