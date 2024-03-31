import { FC } from 'react';

interface SettingMenuSidebar {
  settingList: string[];
}

const SettingMenuSidebar: FC<SettingMenuSidebar> = ({ settingList }) => {
  return (
    <ul className="flex flex-col">
      {settingList.map((setting) => (
        <li key={setting}>
          <button
            type="button"
            className="py-4 w-full text-start border-b border-gray flex justify-between items-center"
          >
            {setting}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SettingMenuSidebar;
