// Dependencies
import React, { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import { Register } from "../../components/pages/register";
import { Header } from "../../components/elements/header";
import { RegisterForm } from "../../components/compositions/register-form";
import { Input } from "../../components/elements/input";

// Schema
import { registerFormSchema } from "../../components/compositions/register-form/register-form.schema";
import { RegisterFormData } from "../../components/compositions/register-form/register-form.types";

export const RegisterPage: FunctionComponent = () => {
  const { register, handleSubmit, formState } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
    mode: "onChange",
  });

  const handleCreateUser = (data: any) => {
    console.log(data);
  };

  return (
    <Register
      headerSection={
        <Header
          title="Cadastre-se para postar"
          headline="Crie seu usuário e compartilhe suas histórias!"
        />
      }
      registerFormSection={
        <RegisterForm
          handleSubmit={handleSubmit(handleCreateUser)}
          nameInputElement={
            <Input
              type="text"
              {...register("name")}
              placeholder="Nome"
              {...(formState.errors.name?.message && {
                errorMessage: `${formState.errors.name.message}`,
                variant: "error",
              })}
            />
          }
          emailInputElement={
            <Input
              type="email"
              {...register("email")}
              placeholder="E-mail"
              {...(formState.errors.email?.message && {
                errorMessage: `${formState.errors.email.message}`,
                variant: "error",
              })}
            />
          }
          passwordInputElement={
            <Input
              type="password"
              {...register("password")}
              placeholder="Senha"
              {...(formState.errors.password?.message && {
                errorMessage: `${formState.errors.password.message}`,
                variant: "error",
              })}
            />
          }
          confirmPasswordInputElement={
            <Input
              type="password"
              {...register("confirmPassword")}
              placeholder="Confirmação de senha"
              {...(formState.errors.confirmPassword?.message && {
                errorMessage: `${formState.errors.confirmPassword.message}`,
                variant: "error",
              })}
            />
          }
        />
      }
    />
  );
};
