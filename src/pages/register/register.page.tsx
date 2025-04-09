// Dependencies
import React, { FunctionComponent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Components
import { Register } from "../../components/pages/register";
import { Header } from "../../components/elements/header";
import { RegisterForm } from "../../components/compositions/register-form";
import { Input } from "../../components/elements/input";

// Schema
import { registerFormSchema } from "../../components/compositions/register-form/register-form.schema";

// Types
import { RegisterFormResponseData } from "../../components/compositions/register-form/register-form.types";

// Hooks
import { UseAuthentication } from "../../hooks/use-authentication";

export const RegisterPage: FunctionComponent = () => {
  const { register, handleSubmit, formState, reset } =
    useForm<RegisterFormResponseData>({
      resolver: zodResolver(registerFormSchema),
      mode: "onChange",
      defaultValues: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { createUser, error: authError, isLoading } = UseAuthentication();

  const handleCreateUser = async (data: RegisterFormResponseData) => {
    const { confirmPassword, ...dataWithoutConfirm } = data;

    const response = await createUser(dataWithoutConfirm);

    if (!!response && formState.isSubmitSuccessful) {
      setSuccessMessage(
        `Usuário: ${dataWithoutConfirm.name} criado com sucesso!`
      );
      reset();
    }

    setTimeout(() => {
      setError("");
      setSuccessMessage("");
    }, 3000);
  };

  useEffect(() => {
    if (!!authError) {
      setError(authError);
    } else {
      setError("");
    }
  }, [authError]);

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
          nameInputElement={
            <Input
              type="text"
              {...register("name")}
              placeholder="Nome"
              {...(formState.errors.name?.message && {
                errorMessage: `${formState.errors.name.message}`,
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
              })}
            />
          }
          handleSubmit={handleSubmit(handleCreateUser)}
          isLoading={isLoading}
          {...(error && {
            systemMessage: error,
            variant: "error",
          })}
          {...(!error && {
            systemMessage: successMessage,
            variant: "success",
          })}
        />
      }
    />
  );
};
