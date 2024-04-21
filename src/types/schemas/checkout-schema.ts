import { z } from 'zod';
import { phoneRegex } from '../../utils/regex/phoneRegex';

export const checkoutSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),
  lastName: z
    .string()
    .min(1, 'Пожалуйста, заполните обязательное поле')
    .refine((s) => !s?.includes(' '), 'В данном поле не должно быть пробелов'),
  phoneNumber: z
    .string()
    .regex(phoneRegex, 'Некорректный формат номера телефона')
    .min(11, 'Номер телефона должен состоять из 11 цифр'),
  address: z
    .string({ required_error: 'Пожалуйста, выберите адрес из выпадющего списка' })
    .min(1, 'Пожалуйста, заполните обязательное поле'),
  deliveryMethod: z.string().min(1, 'Пожалуйста, заполните обязательное поле'),
});

export type TCheckoutSchema = z.infer<typeof checkoutSchema>;
