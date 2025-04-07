// Dependencies
import React, { useState, useEffect, FunctionComponent } from "react";
import {
  Button,
  Container,
  ContentWrapper,
  Form,
  Input,
  InputWrapper,
} from "./register-form.styles";

export const RegisterForm: FunctionComponent = () => {
  return (
    <Container>
      <ContentWrapper>
        <Form action="">
          <InputWrapper>
            <Input type="text" name="user-name" placeholder="Nome" required />
          </InputWrapper>

          <InputWrapper>
            <Input
              type="email"
              name="user-mail"
              placeholder="E-mail"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              type="password"
              name="user-password"
              placeholder="Senha"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Input
              type="password"
              name="user-confirm-password"
              placeholder="Confirmação de senha"
              required
            />
          </InputWrapper>

          <Button type="submit">Cadastrar</Button>
        </Form>
      </ContentWrapper>
    </Container>
  );
};
