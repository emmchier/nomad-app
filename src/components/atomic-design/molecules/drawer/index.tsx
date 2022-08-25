import React, { FC } from 'react';

import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react';
import Icon from '../../atoms/icon';
import Button from '../../atoms/button';
import { ImageContent } from './styles';

interface DrawerI {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  title?: string | React.ReactNode | React.ReactElement;
  content?: React.ReactNode | React.ReactElement;
  footerContent?: React.ReactNode | React.ReactElement;
  open?: boolean;
  isTitleImage?: boolean;
  showFooter?: boolean;
  setOpen: (e: boolean) => void;
}

const CustomDrawer: FC<DrawerI> = ({
  size = 'md',
  title = '',
  isTitleImage = false,
  content = '',
  open = false,
  showFooter = false,
  footerContent = '',
  setOpen,
}) => {
  const { onClose } = useDisclosure();

  return (
    <Drawer onClose={onClose} isOpen={open} size={size}>
      <DrawerOverlay />
      <DrawerContent pt={10}>
        <DrawerHeader display="flex" alignItems="center" justifyContent="space-between">
          {isTitleImage ? <ImageContent>{title}</ImageContent> : title}
          <Button variant="icon" ariaLabel="cerrar menú lateral" onClick={() => setOpen(false)}>
            <Icon icon="close" ariaLabel="icono de cerrar" />
          </Button>
        </DrawerHeader>
        <DrawerBody>{content}</DrawerBody>
        {showFooter && <DrawerFooter pt={0}>{footerContent}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
