import { FC } from 'react';
import useFecthData from '../../../hooks/useFecthData';

import BannerDown from '../../atomic-design/atoms/banner-down';
import Footer from '../../atomic-design/molecules/footer';

import Navbar from '../../atomic-design/molecules/navbar';
import { MainContent, ScrolleableContent } from './styles';

interface Proptypes {
  children: React.ReactNode;
}

const MainLayout: FC<Proptypes> = ({ children }) => {
  const { state: navList } = useFecthData('/nav');
  const { state: footerData } = useFecthData('/footer');

  return (
    <MainContent role="main">
      <ScrolleableContent>
        <Navbar list={navList} />
        {children}
        <Footer data={footerData} navList={navList} />
      </ScrolleableContent>
      <BannerDown text="Gracias por scrollear  :)" />
    </MainContent>
  );
};

export default MainLayout;
