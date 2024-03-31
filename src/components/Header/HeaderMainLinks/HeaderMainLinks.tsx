import { navbarLinks } from '../../../utils/constants/navbarLinks';
import HeaderMainLink from './HeaderMainLink/HeaderMainLink';

const HeaderMainLinks = () => {
  return (
    <ul className="hidden gap-11  lg:flex px-4">
      {navbarLinks.map((item) => (
        <HeaderMainLink key={item.title} item={item} />
      ))}
    </ul>
  );
};

export default HeaderMainLinks;
