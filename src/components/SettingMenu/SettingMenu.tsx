import SettingMenuButton from './SettingMenuButton/SettingMenuButton';

import { GoSortDesc } from 'react-icons/go';
import { FiFilter } from 'react-icons/fi';

const settings = [
  {
    title: 'Сортировка',
    Icon: GoSortDesc,
    settingList: ['По возврастанию цены', 'По убыванию цены', 'По алфавиту'],
  },
  {
    title: 'Фильтр',
    Icon: FiFilter,
    settingList: ['По типу', 'По бренду', 'По цвету'],
  },
];

const SettingMenu = () => {
  return (
    <div className="flex justify-around lg:hidden">
      {settings.map((setting) => (
        <SettingMenuButton key={setting.title} {...setting} />
      ))}
    </div>
  );
};

export default SettingMenu;
