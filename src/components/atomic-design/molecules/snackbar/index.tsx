import { Text } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';

import { CloseIcon } from '../../../ui/svg';
import Button from '../../atoms/button';
import { Content } from './styles';

interface PropTypes {
  message: string | React.ReactNode;
  show?: boolean;
  position?: string;
  setShow: (e: boolean) => void;
}

const Snackbar: FC<PropTypes> = ({ message, show = false, position = 'bottomLeft', setShow }) => {
  useEffect(() => {
    setInterval(() => {
      setShow(false);
    }, 8000);
  }, []);

  return (
    <Content position={position} show={show}>
      <Text>{message}</Text>
      <Button onClick={() => setShow(false)} variant="icon" ariaLabel="close message">
        <CloseIcon ariaLabel="close icon" />
      </Button>
    </Content>
  );
};

export default Snackbar;
