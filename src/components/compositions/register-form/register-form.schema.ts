import * as z from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z
      .string()
      .email("Formato do e-mail é invalido")
      .min(1, "O e-mail é obrigatório"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e deve conter mais de 8 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ["confirmPassword"],
  });
