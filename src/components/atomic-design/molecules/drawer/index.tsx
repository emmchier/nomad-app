import React, { FC } from 'react';

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
} from '@chakra-ui/react';
import Icon from '../../atoms/icon';
import Button from '../../atoms/button';

interface DrawerI {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  title?: string | React.ReactNode | React.ReactElement;
  content?: React.ReactNode | React.ReactElement;
  open?: boolean;
  setOpen: (e: boolean) => void;
}

const CustomDrawer: FC<DrawerI> = ({
  size = 'md',
  title = '',
  content = '',
  open = false,
  setOpen,
}) => {
  const { onClose } = useDisclosure();

  return (
    <Drawer onClose={onClose} isOpen={open} size={size}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader display="flex" alignItems="center" justifyContent="space-between">
          {title}
          <Button variant="icon" ariaLabel="cerrar menú lateral" onClick={() => setOpen(false)}>
            <Icon icon="close" ariaLabel="icono de cerrar" />
          </Button>
        </DrawerHeader>
        <DrawerBody>{content}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
