import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';
import { UIContext } from '../../../../context';

import Button from '../button';
import Icon from '../icon';

interface ReservarButtonI {
  size?: 'sm' | 'md' | 'lg';
}

const ReserveButton: FC<ReservarButtonI> = ({ size = 'md' }) => {
  const { openNavbarMenu, setOpenNavbarMenu, setOpenReserveMenu } = useContext(UIContext);
  const router = useRouter();
  const { locale } = router;

  const handleClick = () => {
    openNavbarMenu === true && setOpenNavbarMenu(false);
    setOpenReserveMenu(true);
  };

  return (
    <Button
      onClick={handleClick}
      ariaLabel={locale === 'es' ? 'reservar' : 'reserve'}
      iconLeft={true}
      size={size}
      icon={
        <Icon
          ariaLabel={locale === 'es' ? 'icono de calendario' : 'calendar icon'}
          icon="calendar"
          color="white"
        />
      }
      classes="add-custom-cursor"
    >
      {locale === 'es' ? 'Reservar' : 'Reserve Now'}
    </Button>
  );
};

export default ReserveButton;
