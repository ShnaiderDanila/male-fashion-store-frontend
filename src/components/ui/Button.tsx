import { FC } from 'react';

import { FaArrowRightLong } from 'react-icons/fa6';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <div
      className="flex items-start gap-2 py-[14px] px-[30px] bg-black 
    text-[13px] text-white tracking-[4px] font-bold uppercase max-w-[200px] cursor-pointer"
    >
      {text}
      <FaArrowRightLong className="text-bold text-[17px]" />
    </div>
  );
};

export default Button;
