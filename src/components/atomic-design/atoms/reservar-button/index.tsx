import React, { FC } from 'react';

import Button from '../button';
import Icon from '../icon';

interface ReservarButtonI {
  onClick?: () => void;
}

const ReservarButton: FC<ReservarButtonI> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      ariaLabel="reservar"
      iconLeft={true}
      icon={<Icon ariaLabel="icono calendario" icon="calendar" color="white" />}
    >
      Reservar
    </Button>
  );
};

export default ReservarButton;
