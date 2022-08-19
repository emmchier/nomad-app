import { FC } from 'react';

interface Proptypes {
  children: React.ReactNode;
}

const MainLayout: FC<Proptypes> = ({ children }) => {
  return <main role="main">{children}</main>;
};

export default MainLayout;
