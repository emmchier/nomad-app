import { FC } from 'react';

import navList from '../../data/nav.json';

import Navbar from '../atomic-design/molecules/navbar';

interface Proptypes {
  children: React.ReactNode;
}

const MainLayout: FC<Proptypes> = ({ children }) => {
  return (
    <main role="main">
      <Navbar list={navList} />
      {children}
    </main>
  );
};

export default MainLayout;
