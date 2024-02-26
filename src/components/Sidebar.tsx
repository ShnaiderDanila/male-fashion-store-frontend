import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

const Sidebar = () => {
  return (
    <aside className="pr-[20px]">
      <h6 className="uppercase text-primary font-bold flex items-center justify-between w-[242px]">
        Категории <IoIosArrowDown className="text-[24px]" />
      </h6>

      <ul className="pt-[10px] pb-[20px] flex flex-col gap-2 text-primary-light">
        <li>
          <Link className="hover:text-primary" to="/catalog/shoes">
            Обувь
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/shoes">
            Одежда
          </Link>
        </li>
        <li>
          <Link className="hover:text-primary" to="/shoes">
            Аксессуары
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
