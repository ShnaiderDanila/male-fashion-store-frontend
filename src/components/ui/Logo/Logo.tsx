import { FC } from 'react';

interface LogoProps {
  logo: string;
}

const Logo: FC<LogoProps> = ({ logo }) => {
  return <img className="max-w-full" src={logo} alt="Logo" />;
};

export default Logo;
