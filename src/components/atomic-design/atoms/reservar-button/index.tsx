import React, { FC } from 'react';

import Button from '../button';
import Icon from '../icon';

interface ReservarButtonI {
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const ReservarButton: FC<ReservarButtonI> = ({ onClick, size = 'md' }) => {
  return (
    <Button
      onClick={onClick}
      ariaLabel="reservar"
      iconLeft={true}
      size={size}
      icon={<Icon ariaLabel="icono calendario" icon="calendar" color="white" />}
    >
      Reservar
    </Button>
  );
};

export default ReservarButton;
