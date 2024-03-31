import { FC, useState } from 'react';
import { IconType } from 'react-icons';
import ModalMenu from '../../ui/ModalMenu/ModalMenu';
import SettingMenuSidebar from '../SettingMenuSidebar/SettingMenuSidebar';
import { IoMdClose } from 'react-icons/io';

interface SettingMenuButtonProps {
  Icon: IconType;
  title: string;
  settingList: string[];
}

const SettingMenuButton: FC<SettingMenuButtonProps> = ({ Icon, title, settingList }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <button onClick={toggleMenu} className="p-3 flex items-center gap-3">
        <Icon className="text-2xl" />
        {title}
      </button>
      {menuIsOpen && (
        <ModalMenu title={title} visible={menuIsOpen} setVisible={toggleMenu} CloseIcon={IoMdClose}>
          <SettingMenuSidebar settingList={settingList} />
        </ModalMenu>
      )}
    </>
  );
};

export default SettingMenuButton;
