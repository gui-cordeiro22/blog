// Dependencies
import React, { FunctionComponent } from "react";

// Components
import { Register } from "../../components/pages/register";

export const RegisterPage: FunctionComponent = () => {
  return (
    <Register
      headerSectionElement={<div>Header</div>}
      registerFormComposition={<div>Form de cadstro</div>}
    />
  );
};
