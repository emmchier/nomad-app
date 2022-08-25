import { FC, useContext, useState } from 'react';
import { GlobalDataContext } from '../../../context';
import useFecthData from '../../../hooks/useFecthData';

import BannerDown from '../../atomic-design/atoms/banner-down';
import CustomDrawer from '../../atomic-design/molecules/drawer';
import Footer from '../../atomic-design/molecules/footer';

import Navbar from '../../atomic-design/molecules/navbar';
import NavbarMenu from '../../atomic-design/organisms/navbar-menu';
import ReserveMenu from '../../atomic-design/organisms/reserve-menu';
import { MainContent, ScrolleableContent } from './styles';

interface Proptypes {
  children: React.ReactNode;
}

const MainLayout: FC<Proptypes> = ({ children }) => {
  return (
    <MainContent role="main">
      <ScrolleableContent>
        <Navbar />
        {children}
        <Footer />
      </ScrolleableContent>
      <BannerDown text="Gracias por scrollear  :)" />
      <NavbarMenu />
      <ReserveMenu />
    </MainContent>
  );
};

export default MainLayout;
