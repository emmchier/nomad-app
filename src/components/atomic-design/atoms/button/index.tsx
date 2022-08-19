import React, { FC } from 'react';

import { Button } from '@chakra-ui/react';

interface PropTypes {
  children: React.ReactNode;
  ariaLabel: string;
  icon?: React.ReactElement;
  onClick?: () => void;
}

const CustomButton: FC<PropTypes> = ({ children, ariaLabel, icon, onClick }) => {
  return (
    <Button
      aria-label={ariaLabel}
      _hover={{ bg: '#284F96' }}
      _active={{ bg: '#163877' }}
      leftIcon={icon}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
