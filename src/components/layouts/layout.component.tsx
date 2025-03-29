// Dependencies
import React, { Fragment, FunctionComponent } from "react";

// Components
import { Navbar } from "../compositions/navbar";
import { Footer } from "../compositions/footer";

// Types
import { LayoutProps } from "./layout.types";

export const Layout: FunctionComponent<LayoutProps> = ({ contentPage }) => {
  return (
    <Fragment>
      <Navbar />

      {contentPage}

      <Footer />
    </Fragment>
  );
};
