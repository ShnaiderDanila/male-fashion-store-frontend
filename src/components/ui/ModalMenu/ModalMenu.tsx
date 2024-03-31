import { FC, ReactNode } from 'react';
import { IconType } from 'react-icons';

interface ModalMenuProps {
  title: string;
  children: ReactNode;
  visible: boolean;
  setVisible: (arg: boolean) => void;
  CloseIcon: IconType;
}

const ModalMenu: FC<ModalMenuProps> = ({ title, visible, setVisible, CloseIcon, children }) => {
  return (
    <>
      <div
        onClick={() => setVisible(!visible)}
        className={`lg:hidden bg-black-overlay fixed top-0 left-0 h-full w-full z-[41] ${visible ? 'block' : 'hidden'}`}
      ></div>

      <div
        className={`flex lg:hidden flex-col gap-8 py-12 pl-7 pr-5 w-80 h-full z-[42] fixed top-0 right-0 bg-white 
        transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-96'}`}
      >
        <button onClick={() => setVisible(!visible)} className="absolute top-7 left-3 p-4">
          <CloseIcon className="text-3xl" />
        </button>
        <h6 className="text-center text-primary-light">{title}</h6>
        {children}
      </div>
    </>
  );
};

export default ModalMenu;
