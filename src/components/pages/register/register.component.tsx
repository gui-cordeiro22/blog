// Dependencies
import React, { FunctionComponent } from "react";

// Layout
import { Layout } from "../../layouts";

// Types
import { RegisterProps } from "./register.types";

export const Register: FunctionComponent<RegisterProps> = () => {
  return <Layout contentPage={<h1>Register Page</h1>} />;
};
