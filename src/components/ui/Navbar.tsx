import { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { INavbarItem } from '../../types/entities/navbar-item-entity';

interface NavbarProps {
  navbarItems: INavbarItem[];
}

const Navbar: FC<NavbarProps> = ({ navbarItems }) => {
  return (
    <nav className="px-4">
      <ul className="flex gap-[45px]">
        {navbarItems.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `group navbar-link ${isActive ? 'underline underline-offset-8 decoration-2 decoration-red' : ''}`
              }
            >
              {item.title}
              <span className="navbar-span"></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
