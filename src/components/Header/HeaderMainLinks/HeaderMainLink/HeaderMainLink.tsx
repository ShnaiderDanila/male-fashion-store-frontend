import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface HeaderMainLinkProps {
  item: {
    link: string;
    title: string;
  };
}

const HeaderMainLink: FC<HeaderMainLinkProps> = ({ item }) => {
  return (
    <li>
      <NavLink
        to={item.link}
        className={({ isActive }) =>
          `group text-lg font-semibold ${isActive ? 'underline underline-offset-8 decoration-2 decoration-red' : ''}`
        }
      >
        {item.title}
        <span className="block cursor-pointer m-auto max-w-0 opacity-0  group-hover:max-w-full h-0.5 bg-red transition-all duration-500 group-hover:opacity-100"></span>
      </NavLink>
    </li>
  );
};

export default HeaderMainLink;
