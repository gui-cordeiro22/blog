// Dependencies
import { ReactNode } from "react";

export type RegisterFormResponseData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterFormVariantMessage = "success" | "error";

export type RegisterFormData = {
  systemMessage?: string;
  variant?: RegisterFormVariantMessage;
  isLoading: boolean;
};

export type RegisterFormElements = {
  nameInputElement: ReactNode;
  emailInputElement: ReactNode;
  passwordInputElement: ReactNode;
  confirmPasswordInputElement: ReactNode;
};

export type RegisterFormAction = {
  handleSubmit: () => void;
};

export type RegisterFormProps = RegisterFormData &
  RegisterFormElements &
  RegisterFormAction;
