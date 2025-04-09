// Dependencies
import styled, { css } from "styled-components";

// Types
import { RegisterFormVariantMessage } from "./register-form.types";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1920px;
  gap: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 22px 32px;
  width: 360px;
  gap: 16px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

export const FieldLabel = styled.small`
  padding: 0px 6px;
  color: #828282;
`;

export const Button = styled.button`
  font-size: 16px;
  font-weight: bold;
  background-color: #1a8918;
  color: #fff;
  border-radius: 8px;
  padding: 6px 10px;
  transition: background-color 0.3s ease-in;

  &:hover {
    background-color: #0f730c;
  }
`;

type SystemMessageWrapperStyleProps = {
  variant?: RegisterFormVariantMessage;
};

export const SystemMessageWrapper = styled.div<SystemMessageWrapperStyleProps>`
  width: fit-content;
  max-width: 360px;
  border-radius: 6px;
  padding: 6px;

  ${({ variant }) =>
    variant === "error" &&
    css`
      background-color: #f8d7da;
      border: 1px solid #f5c6cb;
    `}

  ${({ variant }) =>
    variant === "success" &&
    css`
      background-color: #f0fff0;
      border: 1px solid #0f730c;
    `}
`;

type SystemMessageStyleProps = {
  variant?: RegisterFormVariantMessage;
};

export const SystemMessage = styled.small<SystemMessageStyleProps>`
  ${({ variant }) =>
    variant === "error" &&
    css`
      color: #721c24;
    `}

  ${({ variant }) =>
    variant === "success" &&
    css`
      color: #0f730c;
    `}
`;
