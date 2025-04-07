// Dependencies
import React, { FunctionComponent } from "react";

// Components
import { Register } from "../../components/pages/register";
import { Header } from "../../components/elements/header";
import { RegisterForm } from "../../components/compositions/register-form";

export const RegisterPage: FunctionComponent = () => {
  return (
    <Register
      headerSection={
        <Header
          title="Cadastre-se para postar"
          headline="Crie seu usuário e compartilhe suas histórias!"
        />
      }
      registerFormSection={<RegisterForm />}
    />
  );
};
