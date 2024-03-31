import { FC } from 'react';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { BsFillEyeFill } from 'react-icons/bs';

interface HiddenPasswordButtonProps {
  hidden: boolean;
  setHidden: () => void;
}

const HiddenPasswordButton: FC<HiddenPasswordButtonProps> = ({ hidden, setHidden }) => {
  return (
    <button
      className={`absolute top-7 right-0 p-[13px] text-primary-light`}
      type="button"
      onClick={setHidden}
    >
      {hidden ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
    </button>
  );
};

export default HiddenPasswordButton;
