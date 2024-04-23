import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';

import { profileSchema, TProfileSchema } from '../../types/schemas/profile-schema';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

import FormInput from '../ui/FormInput/FormInput';
import CustomButton from '../ui/CustomButton/CustomButton';

import { BsFillPencilFill } from 'react-icons/bs';
import { useState } from 'react';
import Popup from '../ui/Popup/Popup';

import { useAppSelector } from '../../hooks/redux';
import { RootState } from '../../store/store';
import { userAPI } from '../../utils/api/services/UserService';
import { toast } from 'react-toastify';
import { TErrorResponce } from '../../types/error-responce';
import ProfileEditPasswordForm from './ProfileEditPasswordForm/ProfileEditPasswordForm';
import { FaCheck } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import GoogleAdressInput from '../ui/GoogleAddressInput/GoogleAdressInput';
import { useDispatch } from 'react-redux';
import { updateUser } from 'src/store/slices/userSlice';

const ProfileForm = () => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);

  const [updateCurrentUser] = userAPI.useUpdateCurrentUserMutation();

  const [passwordIsEdit, setPasswordIsEdit] = useState(false);
  const toggleBodyScrollLock = useBodyScrollLock();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
    setValue,
    getValues,
    control,
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
      .then((user) => {
        dispatch(updateUser(user));
        reset({
          firstName: user.firstName,
          lastName: user.lastName,
          address: user.address || '',
          phoneNumber: user.phoneNumber,
          email: user.email,
        });
        toast.success('Изменения сохранены!');
      })
      .catch((error: TErrorResponce) => {
        if (error.data) {
          toast.error(error.data.message);
        } else {
          toast.error('Ошибка сервера! Пожалуйста, повторите попытку позже.');
        }
      });
  };

  const toggleEditPasswordPopup = () => {
    setPasswordIsEdit(!passwordIsEdit);
    toggleBodyScrollLock();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-96 lg:max-w-3xl mb-8">
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

        <fieldset className="w-full mb-3">
          <legend className="mb-3 text-lg">Адрес</legend>
          <Controller
            control={control}
            name={'address'}
            render={({ field: { onChange } }) => (
              <GoogleAdressInput onChange={onChange} defaultValue={getValues('address')} />
            )}
          />
        </fieldset>

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
        {/* Desktop */}
        <div className="hidden lg:flex flex-col justify-center gap-10 lg:flex-row">
          <CustomButton
            type={'button'}
            disabled={isSubmitting || !isValid || !isDirty}
            onClick={() => reset()}
          >
            <span>Отменить</span>
          </CustomButton>
          <CustomButton disabled={isSubmitting || !isValid || !isDirty}>
            <span>Сохранить</span>
          </CustomButton>
        </div>
        {/* Mobile */}
        {isValid && isDirty && (
          <div className="lg:hidden fixed bottom-0 left-0 shadow-lg p-5 bg-white w-screen flex z-40 gap-3 justify-center">
            <CustomButton
              onClick={() => reset()}
              disabled={isSubmitting || !isValid || !isDirty}
              maxWidth="45%"
              height="56px"
            >
              <IoMdClose className="text-2xl" />
            </CustomButton>
            <CustomButton
              disabled={isSubmitting || !isValid || !isDirty}
              maxWidth="45%"
              height="56px"
            >
              <FaCheck className="text-lg" />
            </CustomButton>
          </div>
        )}
      </form>
      {passwordIsEdit && (
        <Popup
          isOpen={passwordIsEdit}
          toggleOpen={toggleEditPasswordPopup}
          title="Изменение пароля"
        >
          <ProfileEditPasswordForm toggleEditPasswordPopup={toggleEditPasswordPopup} />
        </Popup>
      )}
    </>
  );
};

export default ProfileForm;
