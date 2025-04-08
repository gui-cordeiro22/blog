// Dependencies
import { ReactNode } from "react";

export type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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

export type RegisterFormProps = RegisterFormElements & RegisterFormAction;
