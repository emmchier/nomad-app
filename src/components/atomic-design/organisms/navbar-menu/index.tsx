import { useRouter } from 'next/router';
import React, { FC, useContext } from 'react';

import { UIContext } from '../../../../context';
import Icon from '../../atoms/icon';
import LanguageButton from '../../atoms/language-button';
import ReservarButton from '../../atoms/reserve-button';
import CustomDrawer from '../../molecules/drawer';
import NavList from '../nav-list';
import { Content, ActionContent } from './styles';

const NavbarMenu: FC = () => {
  const { openNavbarMenu, setOpenNavbarMenu } = useContext(UIContext);

  const router = useRouter();
  const { locale } = router;

  return (
    <CustomDrawer
      open={openNavbarMenu}
      setOpen={setOpenNavbarMenu}
      size="full"
      isTitleImage={true}
      title={<Icon icon="brand" ariaLabel={locale === 'es' ? 'logo de Nomad' : 'Nomad logo'} />}
      content={
        <Content>
          <NavList isNavRes={true} direction="vertical" hideItems="all" />
        </Content>
      }
      showFooter={true}
      footerContent={
        <ActionContent>
          <LanguageButton showIcon={true} />
          <ReservarButton size="lg" />
        </ActionContent>
      }
    />
  );
};

export default NavbarMenu;
