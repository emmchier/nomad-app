import React, { FC, useContext } from 'react';

import { GlobalDataContext } from '../../../../context';
import Icon from '../../atoms/icon';
import LanguageButton from '../../atoms/language-button';
import ReservarButton from '../../atoms/reservar-button';
import CustomDrawer from '../../molecules/drawer';
import NavList from '../nav-list';
import { Content } from './styles';

const NavbarMenu: FC = () => {
  const { openNavbarMenu, setOpenNavbarMenu } = useContext(GlobalDataContext);

  return (
    <CustomDrawer
      open={openNavbarMenu}
      setOpen={setOpenNavbarMenu}
      size="full"
      title={<Icon icon="brand" ariaLabel="logo de Nomad" />}
      content={
        <Content>
          <NavList isNavRes={true} direction="vertical" hideItems="all" />
          <span>
            <LanguageButton />
            <ReservarButton />
          </span>
        </Content>
      }
    />
  );
};

export default NavbarMenu;
