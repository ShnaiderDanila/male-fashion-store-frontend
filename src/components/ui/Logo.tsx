import { FC } from 'react';

interface LogoProps {
  logo: string;
}

const Logo: FC<LogoProps> = ({ logo }) => {
  return <img className="pr-4 max-w-full" src={logo} alt="Logo" />;
};

export default Logo;
