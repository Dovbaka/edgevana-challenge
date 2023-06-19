import type {ButtonHTMLAttributes, FC, ReactNode} from 'react';

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({children, disabled, className, ...props}) => {
  const baseClasses = 'text-white bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full mt-10'
  const disabledClasses = disabled ? 'bg-disabled text-text' : '';

  return (
    <button
      type="button"
      disabled={disabled}
      className={`${disabledClasses} ${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
