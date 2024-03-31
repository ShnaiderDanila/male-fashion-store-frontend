import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { TSignUpSchema, signUpSchema } from '../../types/schemas/signup-schema';

import FormInput from '../ui/FormInput/FormInput';
import Button from '../ui/Button/Button';
import { FC, useState } from 'react';
import HiddenPasswordButton from '../ui/HiddenPasswordButton/HiddenPasswordButton';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAppDispatch } from '../../hooks/redux';
import { userSignIn } from '../../store/slices/UserSlice';
import { authAPI } from '../../utils/api/services/AuthService';
import { TErrorResponce } from '../../types/error-responce';

const SignUpForm: FC = () => {
  const [passwordIsHidden, setPasswordIsHidden] = useState({
    password: true,
    confirmPassword: true,
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const [signUp] = authAPI.useRegistrationMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    setValue,
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TSignUpSchema> = async (userData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...user } = userData;
    await signUp(user)
      .unwrap()
      .then((data) => {
        reset();
        localStorage.setItem('token', data.token);
        dispatch(userSignIn(data.user));
        navigate('/', { replace: true });
        toast.success('Вы успешно зарегистрировались!');
      })
      .catch((error: TErrorResponce) => {
        toast.error(error.data.message);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-96">
      <fieldset className="mx-auto flex flex-col gap-3 w-full mb-2">
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
        <FormInput
          labelTitle="Email*"
          inputId="Email"
          error={errors.email?.message}
          placeholder="Введите email"
          {...register('email')}
          clearField={() => setValue('email', '', { shouldValidate: true })}
        />
        <FormInput
          labelTitle="Пароль*"
          inputId="Пароль"
          type={passwordIsHidden.password ? 'password' : 'text'}
          error={errors.password?.message}
          placeholder="Придумайте пароль"
          {...register('password')}
        >
          <HiddenPasswordButton
            hidden={passwordIsHidden.password}
            setHidden={() =>
              setPasswordIsHidden({ ...passwordIsHidden, password: !passwordIsHidden.password })
            }
          />
        </FormInput>
        <FormInput
          labelTitle="Повтор пароля*"
          inputId="Повтор пароля"
          type={passwordIsHidden.confirmPassword ? 'password' : 'text'}
          error={errors.confirmPassword?.message}
          placeholder="Повторите пароль"
          {...register('confirmPassword')}
        >
          <HiddenPasswordButton
            hidden={passwordIsHidden.confirmPassword}
            setHidden={() =>
              setPasswordIsHidden({
                ...passwordIsHidden,
                confirmPassword: !passwordIsHidden.confirmPassword,
              })
            }
          />
        </FormInput>
      </fieldset>
      <p className="mb-3">* - обязательные поля для заполнения</p>
      <Button disabled={isSubmitting || !isDirty || !isValid}>
        <span>Зарегистрироваться</span>
      </Button>
    </form>
  );
};

export default SignUpForm;
