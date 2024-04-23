import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import FormInput from '../ui/FormInput/FormInput';
import { zodResolver } from '@hookform/resolvers/zod';

import { russianPost, cdek } from '../../utils/constants/paymentIcons';
import { TCheckoutSchema, checkoutSchema } from '../../types/schemas/checkout-schema';

import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import CustomButton from '../ui/CustomButton/CustomButton';
import RadioInput from '../ui/RadioInput/RadioInput';
import GoogleAdressInput from '../ui/GoogleAddressInput/GoogleAdressInput';
import { ordersAPI } from '../../utils/api/services/OrdersService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { removeAllProducts } from '../../store/slices/cartSlice';
import { TErrorResponce } from '../../types/error-responce';
import { updateUser } from 'src/store/slices/userSlice';

const CheckoutForm = () => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);
  const cartProducts = useAppSelector((state: RootState) => state.cartReducer.products);

  const dispatch = useDispatch();

  const [createOrder] = ordersAPI.useCreateOrderMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    setValue,
    getValues,
    control,
  } = useForm<TCheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      phoneNumber: currentUser?.phoneNumber,
      address: currentUser?.address,
      deliveryMethod: 'Почта России',
    },
  });

  const onSubmit: SubmitHandler<TCheckoutSchema> = async (data) => {
    const { address, deliveryMethod } = data;

    const order = {
      products: cartProducts,
      address,
      deliveryMethod,
    };

    await createOrder(order)
      .unwrap()
      .then((user) => {
        reset();
        dispatch(removeAllProducts());
        dispatch(updateUser(user));
        toast.success('Ваш заказ успешно оформлен!');
      })
      .catch((error: TErrorResponce) => {
        if (error.data) {
          toast.error(error.data.message);
        } else {
          toast.error('Ошибка сервера! Пожалуйста, повторите попытку позже.');
        }
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-[500px] w-full mx-auto">
      <fieldset className="flex flex-col gap-3 mb-1 w-full">
        <legend className="mb-3 text-lg">1. Контактные данные</legend>
        <FormInput
          labelTitle="Имя"
          inputId="Имя"
          error={errors.firstName?.message}
          placeholder="Введите имя"
          {...register('firstName')}
          clearField={() => setValue('firstName', '', { shouldValidate: true })}
        />
        <FormInput
          labelTitle="Фамилия"
          inputId="Фамилия"
          error={errors.lastName?.message}
          placeholder="Введите фамилию"
          {...register('lastName')}
          clearField={() => setValue('lastName', '', { shouldValidate: true })}
        />
        <FormInput
          labelTitle="Номер телефона"
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
      <fieldset className="flex flex-col gap-3 mb-3 w-full">
        <legend className="mb-3 text-lg">2. Адрес</legend>
        <Controller
          control={control}
          name={'address'}
          render={({ field: { onChange } }) => (
            <GoogleAdressInput onChange={onChange} defaultValue={getValues('address')} />
          )}
        />
      </fieldset>
      <fieldset className="flex flex-col gap-3 mb-5">
        <legend className="mb-3 text-lg">3. Способ доставки</legend>
        <RadioInput
          id={'russian-post'}
          value={'Почта России'}
          iconSrc={russianPost.src}
          iconAlt={russianPost.alt}
          error={errors.deliveryMethod?.message}
          {...register('deliveryMethod')}
        />
        <RadioInput
          id={'cdek'}
          value={'Курьерская служба СДЭК'}
          iconSrc={cdek.src}
          iconAlt={cdek.alt}
          error={errors.deliveryMethod?.message}
          {...register('deliveryMethod')}
        />
      </fieldset>
      <div className="mx-auto hidden lg:flex justify-center">
        <CustomButton disabled={isSubmitting || !isValid}>
          <span>Перейти к оплате</span>
        </CustomButton>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 shadow-lg p-5 bg-white w-screen flex justify-center">
        <CustomButton disabled={isSubmitting || !isValid} maxWidth="90%" height="56px">
          <span>Перейти к оплате</span>
        </CustomButton>
      </div>
    </form>
  );
};

export default CheckoutForm;
