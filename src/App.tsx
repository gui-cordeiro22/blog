// Dependencies
import React, { Fragment, FunctionComponent } from "react";

// Styles
import { GlobalStyle } from "./styles/global";

// Routes
import { ApplicationRoutes } from "./routes";

export const App: FunctionComponent = () => {
  return (
    <Fragment>
      <GlobalStyle />

      <ApplicationRoutes />
    </Fragment>
  );
};

export default App;
