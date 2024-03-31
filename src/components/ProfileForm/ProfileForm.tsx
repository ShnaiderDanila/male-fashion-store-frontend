import { SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { profileSchema, TProfileSchema } from '../../types/schemas/profile-schema';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

import FormInput from '../ui/FormInput/FormInput';
import Button from '../ui/Button/Button';

import { BsFillPencilFill } from 'react-icons/bs';
import { useState } from 'react';
import Popup from '../ui/Popup/Popup';

import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { userAPI } from '../../utils/api/services/UserService';
import { toast } from 'react-toastify';
import { TErrorResponce } from '../../types/error-responce';
import ProfileEditPasswordForm from './ProfileEditPasswordForm/ProfileEditPasswordForm';

const ProfileForm = () => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);

  const [updateCurrentUser] = userAPI.useUpdateCurrentUserMutation();

  const [passwordIsEdit, setPasswordIsEdit] = useState(false);
  const toggleBodyScrollLock = useBodyScrollLock();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
    setValue,
  } = useForm<TProfileSchema>({
    resolver: zodResolver(profileSchema),
    mode: 'onChange',
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      address: currentUser?.address || '',
      phoneNumber: currentUser?.phoneNumber,
      email: currentUser?.email,
    },
  });

  const onSubmit: SubmitHandler<TProfileSchema> = async (userData) => {
    await updateCurrentUser(userData)
      .unwrap()
      .then((data) => {
        reset({
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address || '',
          phoneNumber: data.phoneNumber,
          email: data.email,
        });
        toast.success('Изменения сохранены!');
      })
      .catch((error: TErrorResponce) => {
        toast.error(error.data.message);
      });
  };

  const toggleEditPasswordPopup = () => {
    setPasswordIsEdit(!passwordIsEdit);
    toggleBodyScrollLock();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-96 lg:max-w-3xl">
        {/* Контактные данные */}
        <fieldset className="flex flex-col gap-3 w-full mb-3">
          <legend className="mb-3 text-lg">Контактные данные</legend>
          <div className="flex flex-col lg:flex-row gap-3 items-start">
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
          </div>
          <div className="w-full lg:max-w-[378px]">
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
          </div>
        </fieldset>

        {/* Адрес */}
        <fieldset className="w-full mb-3">
          <legend className="mb-3 text-lg">Адрес</legend>
          <FormInput
            inputId="Адрес"
            error={errors.address?.message}
            placeholder="Введите адрес"
            {...register('address')}
            clearField={() => setValue('address', '', { shouldValidate: true })}
          />
        </fieldset>

        {/* Данные для входа */}
        <fieldset className="w-full lg:max-w-[378px] flex flex-col gap-3 mb-5">
          <legend className="mb-3 text-lg">Данные для входа</legend>
          <FormInput
            labelTitle="E-mail"
            inputId="Email"
            type="email"
            error={errors.email?.message}
            placeholder="Введите email"
            {...register('email')}
            clearField={() => setValue('email', '', { shouldValidate: true })}
          />
          {/* Инпут пароля */}
          <div className="flex flex-col gap-2 text-sm relative">
            <label>Пароль</label>
            <input
              disabled
              type="password"
              className="w-full text-primary-light pl-3 pr-10 min-h-[42px] border border-gray outline-primary rounded-sm flex-1 "
              value="password"
            />
            <button
              onClick={toggleEditPasswordPopup}
              className="text-start flex gap-3 items-center py-3"
              type="button"
            >
              <BsFillPencilFill />
              <span>Изменить пароль</span>
            </button>
          </div>
        </fieldset>
        {isDirty && (
          <div className="flex flex-col justify-center gap-10 lg:flex-row">
            <Button
              type={'button'}
              disabled={isSubmitting || !isValid || !isDirty}
              onClick={() => reset()}
            >
              <span>Отменить</span>
            </Button>
            <Button disabled={isSubmitting || !isValid || !isDirty}>
              <span>Сохранить</span>
            </Button>
          </div>
        )}
        {/* Кнопка сохранить */}
      </form>
      {/* Попап редактирования пароля */}
      {passwordIsEdit && (
        <Popup isOpen={passwordIsEdit} setIsOpen={toggleEditPasswordPopup} title="Изменение пароля">
          <ProfileEditPasswordForm toggleEditPasswordPopup={toggleEditPasswordPopup} />
        </Popup>
      )}
    </>
  );
};

export default ProfileForm;
