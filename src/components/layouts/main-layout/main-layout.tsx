import { useRouter } from 'next/router';
import { FC, useContext } from 'react';
import { UIContext } from '../../../context';

import BannerDown from '../../atomic-design/atoms/banner-down';
import DotRing from '../../atomic-design/atoms/custom-cursor';
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
  const { showSnackbar, setShowSnackbar } = useContext(UIContext);
  const { isShowing, message } = showSnackbar;

  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <MainContent role="main">
        <ScrolleableContent>
          <Navbar />
          {children}
          <Footer />
        </ScrolleableContent>
        <BannerDown
          text={locale === 'es' ? 'Gracias por scrollear  :)' : "Thank's for scrolling  :)"}
        />
        <NavbarMenu />
        <ReserveMenu />
        <Snackbar show={isShowing} message={message} setShow={setShowSnackbar} />
      </MainContent>
      <DotRing />
    </>
  );
};

export default MainLayout;
