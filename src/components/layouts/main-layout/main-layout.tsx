import { FC } from 'react';

import navList from '../../../data/nav.json';
import BannerDown from '../../atomic-design/atoms/banner-down';

import Navbar from '../../atomic-design/molecules/navbar';
import { MainContent, ScrolleableContent } from './styles';

interface Proptypes {
  children: React.ReactNode;
}

const MainLayout: FC<Proptypes> = ({ children }) => {
  return (
    <MainContent role="main">
      <ScrolleableContent>
        <Navbar list={navList} />
        {children}
      </ScrolleableContent>
      <BannerDown />
    </MainContent>
  );
};

export default MainLayout;
