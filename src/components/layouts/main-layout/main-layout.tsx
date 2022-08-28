import { FC, useContext } from 'react';
import { GlobalDataContext } from '../../../context';

import BannerDown from '../../atomic-design/atoms/banner-down';
import Footer from '../../atomic-design/molecules/footer';

import Navbar from '../../atomic-design/molecules/navbar';
import Snackbar from '../../atomic-design/molecules/snackbar';
import NavbarMenu from '../../atomic-design/organisms/navbar-menu';
import ReserveMenu from '../../atomic-design/organisms/reserve-menu';
import { MainContent, ScrolleableContent } from './styles';

interface Proptypes {
  children: React.ReactNode;
}

const MainLayout: FC<Proptypes> = ({ children }) => {
  const { showSnackbar, setShowSnackbar } = useContext(GlobalDataContext);

  const { isShowing, message, interval } = showSnackbar;

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
      <Snackbar show={isShowing} message={message} setShow={setShowSnackbar} />
    </MainContent>
  );
};

export default MainLayout;
