// Dependencies
import React, { FunctionComponent } from "react";

// Components
import { ConditionallyRender } from "../../utilities/conditionally-render";

// Styles
import {
  Button,
  Container,
  ContentWrapper,
  SystemMessage,
  SystemMessageWrapper,
  FieldLabel,
  Form,
  InputWrapper,
} from "./register-form.styles";

// Types
import { RegisterFormProps } from "./register-form.types";

export const RegisterForm: FunctionComponent<RegisterFormProps> = ({
  nameInputElement,
  emailInputElement,
  passwordInputElement,
  confirmPasswordInputElement,
  handleSubmit,
  systemMessage,
  variant,
  isLoading,
}) => {
  return (
    <Container>
      <ContentWrapper>
        <Form onSubmit={handleSubmit}>
          <InputWrapper>
            <FieldLabel>Nome</FieldLabel>
            {nameInputElement}
          </InputWrapper>

          <InputWrapper>
            <FieldLabel>E-mail</FieldLabel>
            {emailInputElement}
          </InputWrapper>

          <InputWrapper>
            <FieldLabel>Senha</FieldLabel>
            {passwordInputElement}
          </InputWrapper>

          <InputWrapper>
            <FieldLabel>Confirmação de senha</FieldLabel>
            {confirmPasswordInputElement}
          </InputWrapper>

          <Button type="submit" disabled={!!isLoading}>
            {!!isLoading ? "Enviando" : "Cadastrar"}
          </Button>
        </Form>

        <ConditionallyRender
          shouldRender={!!systemMessage}
          content={
            <SystemMessageWrapper variant={variant}>
              <SystemMessage variant={variant}>{systemMessage}</SystemMessage>
            </SystemMessageWrapper>
          }
        />
      </ContentWrapper>
    </Container>
  );
};
