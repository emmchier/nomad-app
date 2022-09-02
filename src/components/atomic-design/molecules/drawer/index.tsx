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
import { useRouter } from 'next/router';

interface DrawerI {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  title?: string | React.ReactNode | React.ReactElement;
  content?: React.ReactNode | React.ReactElement;
  footerContent?: React.ReactNode | React.ReactElement;
  open?: boolean;
  isTitleImage?: boolean;
  showFooter?: boolean;
  setOpen: (e: boolean) => void;
  styles?: {};
  headerStyles?: {};
  bodyStyles?: {};
  footerStyles?: {};
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
  styles = { pt: 10 },
  headerStyles,
  bodyStyles,
  footerStyles = { pt: 0 },
}) => {
  const { onClose } = useDisclosure();

  const router = useRouter();
  const { locale } = router;

  return (
    <Drawer onClose={onClose} isOpen={open} size={size}>
      <DrawerOverlay onClick={() => setOpen(open === true && false)} />
      <DrawerContent {...styles}>
        <DrawerHeader
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          {...headerStyles}
        >
          {isTitleImage ? <ImageContent>{title}</ImageContent> : title}
          <Button
            variant="icon"
            ariaLabel={locale === 'es' ? 'cerrar menú lateral' : 'close side menu'}
            onClick={() => setOpen(false)}
          >
            <Icon icon="close" ariaLabel={locale === 'es' ? 'icono de cerrar' : 'close icon'} />
          </Button>
        </DrawerHeader>
        <DrawerBody {...bodyStyles}>{content}</DrawerBody>
        {showFooter && <DrawerFooter {...footerStyles}>{footerContent}</DrawerFooter>}
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
