import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useState } from 'react';

import FormInput from '../../ui/FormInput/FormInput';
import CustomButton from '../../ui/CustomButton/CustomButton';
import HiddenPasswordButton from '../../ui/HiddenPasswordButton/HiddenPasswordButton';

import {
  TEditPasswordSchema,
  editPasswordSchema,
} from '../../../types/schemas/edit-password-schema';
import { userAPI } from '../../../utils/api/services/UserService';
import { TErrorResponce } from '../../../types/error-responce';
import { toast } from 'react-toastify';

interface ProfileEditPasswordFormProps {
  toggleEditPasswordPopup: () => void;
}

const ProfileEditPasswordForm: FC<ProfileEditPasswordFormProps> = ({ toggleEditPasswordPopup }) => {
  const [updateCurrentUserPassword] = userAPI.useUpdateCurrentUserPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<TEditPasswordSchema>({
    resolver: zodResolver(editPasswordSchema),
    mode: 'onChange',
  });

  const [passwordIsHidden, setPasswordIsHidden] = useState({
    password: true,
    confirmPassword: true,
  });

  const onSubmit: SubmitHandler<TEditPasswordSchema> = async (userData) => {
    await updateCurrentUserPassword(userData.password)
      .unwrap()
      .then(() => {
        toggleEditPasswordPopup();
        toast.success('Пароль успешно изменен!');
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
          labelTitle="Новый пароль*"
          inputId="Новый пароль"
          type={passwordIsHidden.password ? 'password' : 'text'}
          error={errors.password?.message}
          placeholder="Введите пароль"
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
          inputId="Пароль"
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
      <CustomButton disabled={isSubmitting || !isDirty || !isValid}>
        <span>Изменить</span>
      </CustomButton>
    </form>
  );
};

export default ProfileEditPasswordForm;
