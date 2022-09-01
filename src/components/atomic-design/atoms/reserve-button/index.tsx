import React, { FC, useContext } from 'react';
import { UIContext } from '../../../../context';

import Button from '../button';
import Icon from '../icon';

interface ReservarButtonI {
  size?: 'sm' | 'md' | 'lg';
}

const ReserveButton: FC<ReservarButtonI> = ({ size = 'md' }) => {
  const { openNavbarMenu, setOpenNavbarMenu, setOpenReserveMenu } = useContext(UIContext);

  const handleClick = () => {
    openNavbarMenu === true && setOpenNavbarMenu(false);
    setOpenReserveMenu(true);
  };

  return (
    <Button
      onClick={handleClick}
      ariaLabel="reservar"
      iconLeft={true}
      size={size}
      icon={<Icon ariaLabel="icono calendario" icon="calendar" color="white" />}
      classes="add-custom-cursor"
    >
      Reservar
    </Button>
  );
};

export default ReserveButton;
