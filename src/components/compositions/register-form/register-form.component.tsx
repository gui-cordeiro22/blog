// Dependencies
import React, { FunctionComponent } from "react";

// Styles
import {
  Button,
  Container,
  ContentWrapper,
  Form,
} from "./register-form.styles";

// Types
import { RegisterFormProps } from "./register-form.types";

export const RegisterForm: FunctionComponent<RegisterFormProps> = ({
  nameInputElement,
  emailInputElement,
  passwordInputElement,
  confirmPasswordInputElement,
  handleSubmit,
}) => {
  return (
    <Container>
      <ContentWrapper>
        <Form onSubmit={handleSubmit}>
          {nameInputElement}

          {emailInputElement}

          {passwordInputElement}

          {confirmPasswordInputElement}

          <Button type="submit">Cadastrar</Button>
        </Form>
      </ContentWrapper>
    </Container>
  );
};
