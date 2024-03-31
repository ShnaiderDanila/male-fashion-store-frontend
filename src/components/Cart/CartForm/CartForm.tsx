import { SubmitHandler, useForm } from 'react-hook-form';
import FormInput from '../../ui/FormInput/FormInput';
import { zodResolver } from '@hookform/resolvers/zod';

import { russianPost, cdek } from '../../../utils/constants/paymentIcons';
import { TPurchaseSchema, purchaseSchema } from '../../../types/schemas/purchase-schema';
import Button from '../../ui/Button/Button';

import { useAppSelector } from '../../../hooks/redux';
import { RootState } from '../../../store/store';

const CartForm = () => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
    setValue,
  } = useForm<TPurchaseSchema>({
    resolver: zodResolver(purchaseSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      phoneNumber: currentUser?.phoneNumber,
      address: currentUser?.address,
      deliveryMethod: 'russian-post',
    },
  });

  const onSubmit: SubmitHandler<TPurchaseSchema> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Заказ оформлен');
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
      {/* Контактные данные */}
      <fieldset className="flex flex-col gap-3 mb-3 max-w-96 w-full">
        <legend className="mb-3 text-lg">1. Контактные данные</legend>
        <FormInput
          labelTitle="Имя*"
          inputId="Имя"
          error={errors.firstName?.message}
          placeholder="Введите имя"
          {...register('firstName')}
          clearField={() => setValue('firstName', '', { shouldValidate: true })}
        />
        <FormInput
          labelTitle="Фамилия*"
          inputId="Фамилия"
          error={errors.lastName?.message}
          placeholder="Введите фамилию"
          {...register('lastName')}
          clearField={() => setValue('lastName', '', { shouldValidate: true })}
        />
        <FormInput
          labelTitle="Номер телефона*"
          inputId="Номер телефона"
          type="tel"
          className="w-full text-primary pl-5 pr-10 py-2 border border-gray outline-primary rounded-sm flex-1"
          maxLength={11}
          error={errors.phoneNumber?.message}
          {...register('phoneNumber')}
          clearField={() => setValue('phoneNumber', '', { shouldValidate: true })}
        >
          <span className="absolute top-[37px] left-3">+</span>
        </FormInput>
      </fieldset>
      {/* Адрес */}
      <fieldset className="flex flex-col gap-3 mb-3 max-w-96">
        <legend className="mb-3 text-lg">2. Адрес</legend>
        <FormInput
          labelTitle="Город*"
          inputId="Город"
          error={errors.city?.message}
          placeholder="Введите город"
          {...register('city')}
        />
        <FormInput
          labelTitle="Улица, дом, корпус, строение, квартира*"
          inputId="Точный адрес"
          error={errors.address?.message}
          placeholder="Введите точный адрес"
          {...register('address')}
          clearField={() => setValue('address', '', { shouldValidate: true })}
        />
        <FormInput
          labelTitle="Почтовый индекс*"
          inputId="Почтовый индекс"
          maxLength={6}
          error={errors.postcode?.message}
          placeholder="Введите почтовый индекс"
          {...register('postcode')}
        />
      </fieldset>
      {/* Способ доставки */}
      <fieldset className="flex flex-col gap-3 mb-3">
        <legend className="mb-3 text-lg">3. Способ доставки</legend>
        <div className="flex gap-4 max-w-96">
          <label
            htmlFor="russian-post"
            className="flex items-center w-full cursor-pointer p-3 rounded-sm has-[:checked]:border hover:bg-white-medium"
          >
            <input
              type="radio"
              id="russian-post"
              value="russian-post"
              className="hidden peer"
              {...register('deliveryMethod')}
            />
            {/* Custom radio button */}
            <div className="mr-3 w-4 h-4 border rounded-full bg-transparent peer-checked:border-4"></div>
            <span className="flex-1">Почта России</span>
            <img src={russianPost.src} alt={russianPost.alt} className="justify-self-end"></img>
          </label>

          {errors.deliveryMethod?.message && (
            <p className="pl-5 text-red-700 mt-1">{errors.deliveryMethod.message}</p>
          )}
        </div>
        <div className="flex gap-4 max-w-96">
          <label
            htmlFor="cdek"
            className="flex items-center w-full cursor-pointer p-3 rounded-sm has-[:checked]:border  hover:bg-white-medium"
          >
            <input
              type="radio"
              id="cdek"
              value="cdek"
              className="hidden peer"
              {...register('deliveryMethod')}
            />
            {/* Custom radio button */}
            <div className="mr-3 w-4 h-4 border rounded-full bg-transparent peer-checked:border-4"></div>
            <span className="flex-1">Курьерская служба СДЭК</span>
            <img src={cdek.src} alt={cdek.alt}></img>
          </label>
          {errors.deliveryMethod?.message && (
            <p className="pl-5 text-red-700 mt-1">{errors.deliveryMethod.message}</p>
          )}
        </div>
      </fieldset>
      <p className="mb-10">* - обязательные поля для заполнения</p>
      <Button disabled={isSubmitting || !isDirty || !isValid}>
        <span>Перейти к оплате</span>
      </Button>

      <p className="text-red">{errors.root?.message}</p>
    </form>
  );
};

export default CartForm;
