import { z } from 'zod';
import { passwordRegex } from '../../utils/regex/passwordRegex';

export const editPasswordSchema = z
  .object({
    password: z
      .string()
      .min(6, 'Минимальная длина пароля - 6 символов')
      .max(30, 'Максимальная длина пароля - 30 символов')
      .regex(
        passwordRegex,
        `Пароль должен содержать хотя бы:
       одну латинскую букву (a-z), 
       одну цифру (0-9), а также  
       один специальный символ (#?!@$%^&*-).`,
      ),
    confirmPassword: z
      .string()
      .min(6, 'Минимальная длина пароля - 6 символов')
      .max(30, 'Максимальная длина пароля - 30 символов')
      .regex(
        passwordRegex,
        `Пароль должен содержать хотя бы:
       одну латинскую букву (a-z), 
       одну цифру (0-9), а также  
       один специальный символ (#?!@$%^&*-).`,
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type TEditPasswordSchema = z.infer<typeof editPasswordSchema>;
