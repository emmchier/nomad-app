import React, { FC } from 'react';

import { List } from '@chakra-ui/react';

interface CustomListI {
  children: React.ReactNode;
  direction?: string;
}

const CustomList: FC<CustomListI> = ({ children, direction = 'horizontal' }) => {
  const getDirection = (dir: string) => {
    switch (dir) {
      case 'horizontal':
        return 'flex';
      case 'vertical':
        return 'inline-block';
      default:
        break;
    }
  };

  return (
    <List as="ul" display={getDirection(direction)}>
      {children}
    </List>
  );
};

export default CustomList;
