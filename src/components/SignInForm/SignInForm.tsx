import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { TSignInSchema, signInSchema } from '../../types/schemas/signin-schema';

import FormInput from '../ui/FormInput/FormInput';
import CustomButton from '../ui/CustomButton/CustomButton';
import { FC, useState } from 'react';
import HiddenPasswordButton from '../ui/HiddenPasswordButton/HiddenPasswordButton';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../../utils/api/services/AuthService';
import { toast } from 'react-toastify';
import { TErrorResponce } from '../../types/error-responce';

import { updateUser } from 'src/store/slices/userSlice';
import { useAppDispatch } from '../../hooks/redux';

const SignInForm: FC = () => {
  const [passwordIsHidden, setPasswordIsHidden] = useState(true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [signIn] = authAPI.useLoginMutation({
    fixedCacheKey: 'shared-update-post',
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
    setValue,
  } = useForm<TSignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<TSignInSchema> = async (data) => {
    await signIn(data)
      .unwrap()
      .then(({ user, token }) => {
        localStorage.setItem('token', token);
        dispatch(updateUser(user));
        reset();
        navigate('/', { replace: true });
        toast.success('Вход выполнен успешно!');
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
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-96">
      <fieldset className="mx-auto mb-5 flex flex-col gap-3 w-full">
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
          type={passwordIsHidden ? 'password' : 'text'}
          error={errors.password?.message}
          placeholder="Введите пароль"
          {...register('password')}
        >
          <HiddenPasswordButton
            hidden={passwordIsHidden}
            setHidden={() => setPasswordIsHidden(!passwordIsHidden)}
          ></HiddenPasswordButton>
        </FormInput>
      </fieldset>
      <p className="mb-3">* - обязательные поля для заполнения</p>
      <CustomButton disabled={isSubmitting || !isDirty || !isValid}>
        <span>Войти</span>
      </CustomButton>
    </form>
  );
};

export default SignInForm;
