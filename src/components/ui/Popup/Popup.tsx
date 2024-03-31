import { FC, ReactNode } from 'react';
import { IoMdClose } from 'react-icons/io';

interface PopupProps {
  isOpen: boolean;
  setIsOpen: () => void;
  title: string;
  children?: ReactNode;
}

const Popup: FC<PopupProps> = ({ isOpen, setIsOpen, title, children }) => {
  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'} px-5 fixed top-0 left-0 w-full h-full bg-black-overlay z-[60] flex justify-center items-center`}
    >
      {isOpen && (
        <div className=" bg-white p-5 sm:p-10 relative w-full max-w-96 sm:max-w-lg">
          <h2 className="text-center mb-5 sm:mb-10 font-semibold text-xl">{title}</h2>
          {children}
          <button
            onClick={setIsOpen}
            className="absolute -top-12 -right-3 sm:-top-11 sm:-right-12 z-[90] text-white text-5xl"
          >
            <IoMdClose />
          </button>
        </div>
      )}
    </div>
  );
};

export default Popup;
