import Image from 'next/image';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

import CheckIcon from '../../../../public/assets/images/checkmark-white.svg';
import {ReactNode} from "react";

type CustomCheckboxProps<T extends FieldValues> = {
  name: Path<T>;
  children: ReactNode;
  isChecked: boolean;
  register?: UseFormRegister<T>;
  required?: boolean;
};

export const CustomCheckbox = <T extends FieldValues>({
  name,
  children,
  register,
  required = false,
  isChecked,
}: CustomCheckboxProps<T>) => {
  return (
    <div className="flex justify-between gap-x-5">
      <label htmlFor={name}>
        <div
          className={`relative w-6 h-6 flex items-center justify-center rounded-[4px] cursor-pointer border border-secondary-light transition-colors duration-150 ${
            isChecked ? 'bg-primary border-primary' : ''
          }`}
        >
          {isChecked && (
            <Image src={CheckIcon} alt="check" width={15} height={15} />
          )}
        </div>

        <input
          id={name}
          name={name}
          type="checkbox"
          className="hidden"
          {...register?.(name, { required })}
        />
      </label>

      {children}
    </div>
  );
};
