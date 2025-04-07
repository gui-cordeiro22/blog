// Dependencies
import React, { Fragment, FunctionComponent } from "react";

// Layout
import { Layout } from "../../layouts";

// Types
import { RegisterProps } from "./register.types";

export const Register: FunctionComponent<RegisterProps> = ({
  headerSection,
  registerFormSection,
}) => {
  return (
    <Layout
      contentPage={
        <Fragment>
          {headerSection}

          {registerFormSection}
        </Fragment>
      }
    />
  );
};
