"use client";
import {InputHTMLAttributes, ReactNode, useMemo, useState} from 'react';
import {
  UseFormRegister,
  FieldValues,
  Path,
  FieldErrors,
} from 'react-hook-form';
import Image from 'next/image';
import { EyeClose, EyeOpen } from '@/helpers/images';

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string | ReactNode;
  errors?: FieldErrors<T>;
  required?: boolean;
  register?: UseFormRegister<T>;
} & InputHTMLAttributes<HTMLInputElement>;

export const FormInput = <T extends FieldValues>({
  register,
  name,
  label,
  required,
  type = 'text',
  errors,
  ...props
}: FormInputProps<T>) => {
  const isPassword = type === 'password';
  const [isHidden, setIsHidden] = useState(isPassword);
  const [typeState, setTypeState] = useState(type);
  const isCheckbox = useMemo(() => type === 'checkbox', [type]);
  const onEyeClick = () => {
    setIsHidden(hidden => !hidden);
    setTypeState(typeState === 'password' ? 'text' : 'password');
  };

  const error = errors && errors[name]?.message

  const inputClasses = "w-full outline-none p-4 text-sm text-secondary font-semibold bg-light rounded-lg placeholder:text-secondary-light"
  const checkboxClasses = 'relative w-6 h-6 rounded-[4px] cursor-pointer transition duration-150 mr-5 checked:bg-primary border-primary'
  const errorClass = error ? 'border border-red-500' : 'border-none outline-none'

  return (
    <div className={`relative mb-4 ${isCheckbox && 'flex flex-row-reverse'}`}>
      {label && (
        <label
          htmlFor={name}
          className="block mb-2 text-sm text-primary font-semibold"
        >
          {label}
        </label>
      )}

      <div className='relative'>
        <input
          id={name}
          name={name}
          type={typeState}
          className={`${isCheckbox ? checkboxClasses : inputClasses} ${errorClass}`}
          {...register?.(name, { required })}
          {...props}
        />
        {type === 'password' && (
          <Image
            src={isHidden ? EyeOpen : EyeClose}
            onClick={onEyeClick}
            className="absolute top-3.5 right-4 cursor-pointer"
            alt="hidden-icon"
          />
        )}
      </div>
      {error && (
        <div className="absolute left-0 -bottom-4 text-red-600 text-xs mt-1">
          {error as string}
        </div>
      )}
    </div>
  );
};
