import { useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';
import { UIContext } from '../../../../context';

import Button from '../button';
import Icon from '../icon';

interface LanguageButtonI {
  showIcon?: boolean;
}

const LanguageButton: FC<LanguageButtonI> = ({ showIcon = false }) => {
  const { openNavbarMenu, setOpenNavbarMenu, setShowSnackbar, languageMode, setLanguageMode } =
    useContext(UIContext);

  const router = useRouter();
  const { locale } = router;

  const [isMobile] = useMediaQuery(['(max-width: 767px)', '(display-mode: browser)']);

  const getMessage = locale === 'en' ? 'Traducido al Español' : 'Translated to English';

  const handleLenguage = () => {
    setLanguageMode(!languageMode);
    router.push(router.pathname, router.asPath, { locale: !languageMode === true ? 'es' : 'en' });
    isMobile && setOpenNavbarMenu(!openNavbarMenu);
    setShowSnackbar({
      isShowing: true,
      message: getMessage,
    });
  };

  return (
    <Button
      onClick={handleLenguage}
      variant="text"
      height="100%"
      ariaLabel={getMessage}
      iconLeft={showIcon}
      icon={
        <Icon ariaLabel={locale === 'es' ? 'icono universal' : 'universal icon'} icon="language" />
      }
    >
      {locale === 'es' ? 'Español' : 'English'}
    </Button>
  );
};

export default LanguageButton;
