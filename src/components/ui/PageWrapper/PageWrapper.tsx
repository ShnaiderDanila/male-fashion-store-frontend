import { FC, ReactNode } from 'react';

interface PageWrapperProps {
  children?: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return <main className="pt-20 lg:pt-28 flex-1">{children}</main>;
};

export default PageWrapper;
