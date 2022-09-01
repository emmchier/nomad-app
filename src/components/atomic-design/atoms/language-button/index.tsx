import { useMediaQuery } from '@chakra-ui/react';
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

  const [isMobile] = useMediaQuery(['(max-width: 767px)', '(display-mode: browser)']);

  const getLanguageLabel = (mode: boolean) => (mode === false ? 'Español' : 'English');

  const getMessage = (mode: boolean) =>
    mode === false ? 'Traducido al Español' : 'Translated to English';

  const handleLenguage = () => {
    setLanguageMode(!languageMode);
    isMobile && setOpenNavbarMenu(!openNavbarMenu);
    setShowSnackbar({
      isShowing: true,
      message: getMessage(languageMode),
    });
  };

  return (
    <Button
      onClick={handleLenguage}
      variant="text"
      height="100%"
      ariaLabel={getMessage(languageMode)}
      iconLeft={showIcon}
      icon={<Icon ariaLabel="icono universal" icon="language" />}
    >
      {getLanguageLabel(languageMode)}
    </Button>
  );
};

export default LanguageButton;
