import { z } from 'zod';
import { phoneRegex } from '../../utils/regex/phoneRegex';

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов')
    .optional(),
  lastName: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов')
    .optional(),
  phoneNumber: z
    .string()
    .regex(phoneRegex, 'Некорректный формат номера телефона')
    .min(11, 'Номер телефона должен состоять из 11 цифр')
    .max(11, 'Номер телефона должен состоять из 11 цифр')
    .optional(),
  email: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .email('Некорректный формат электронной почты')
    .optional(),
  address: z.string({ required_error: 'Пожалуйста, выберите адрес из выпадющего списка' }),
});

export type TProfileSchema = z.infer<typeof profileSchema>;
