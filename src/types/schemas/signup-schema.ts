import { z } from 'zod';
import { phoneRegex } from '../../utils/regex/phoneRegex';
import { passwordRegex } from '../../utils/regex/passwordRegex';

export const signUpSchema = z
  .object({
    firstName: z
      .string()
      .min(1, 'Пожалуйста, заполните обязательное поле')
      .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),
    lastName: z
      .string()
      .min(1, 'Пожалуйста, заполните обязательное поле')
      .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),
    email: z
      .string()
      .min(1, 'Пожалуйста, заполните обязательное поле')
      .email('Некорректный формат электронной почты')
      .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),

    phoneNumber: z
      .string()
      .regex(phoneRegex, 'Некорректный формат номера телефона')
      .min(11, 'Номер телефона должен состоять из 11 цифр'),
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

export type TSignUpSchema = z.infer<typeof signUpSchema>;
