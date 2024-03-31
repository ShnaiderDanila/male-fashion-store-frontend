import { FC, ReactNode } from 'react';

interface ButtonProps {
  disabled?: boolean;
  children: ReactNode;
  type?: 'reset' | 'button' | undefined;
  onClick?: (() => void) | undefined;
}

const Button: FC<ButtonProps> = ({ disabled, type, onClick, children }) => {
  return (
    <button
      className="bg-primary text-white w-full max-w-96 py-3 px-6 flex flex-col 
      items-center transition-all duration-200 hover:bg-black-overlay
      disabled:bg-primary-light"
      disabled={disabled}
      type={type || 'submit'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
