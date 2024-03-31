import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),
  password: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
