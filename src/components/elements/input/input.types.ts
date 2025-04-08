// Dependencies
import { InputHTMLAttributes } from "react";

export type InputFieldData = Partial<InputHTMLAttributes<HTMLInputElement>> & {
  errorMessage?: string;
};

export type InputFieldProps = InputFieldData;
