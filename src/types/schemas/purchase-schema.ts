import { z } from 'zod';
import { phoneRegex } from '../../utils/regex/phoneRegex';

export const purchaseSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),
  lastName: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),

  city: z.string().min(1, 'Пожалуйста, заполните обязательное поле'),
  address: z.string().min(1, 'Пожалуйста, заполните обязательное поле'),
  postcode: z.string().min(1, 'Пожалуйста, заполните обязательное поле'),
  phoneNumber: z
    .string()
    .regex(phoneRegex, 'Неверный формат номера телефона')
    .min(11, 'Номер телефона должен состоять из 11 цифр'),
  deliveryMethod: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),
});

export type TPurchaseSchema = z.infer<typeof purchaseSchema>;
