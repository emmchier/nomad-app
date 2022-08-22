import React, { FC, useContext } from 'react';

import Link from 'next/link';

import { Container, Divider } from '@chakra-ui/react';
import Icon from '../../atoms/icon';
import NavList from '../../organisms/nav-list';
import Button from '../../atoms/button';

import { Header, NavbarActions, Brand, BurguerButton } from './styles';
import { GlobalDataContext } from '../../../../context';
import LanguageButton from '../../atoms/language-button';
import ReservarButton from '../../atoms/reservar-button';

const Navbar: FC = () => {
  const { setOpenNavbarMenu } = useContext(GlobalDataContext);

  return (
    <Header>
      <Container display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/" as="/" passHref>
          <a>
            <Brand>
              <Icon icon="brand" ariaLabel="logo de Nomad" />
            </Brand>
          </a>
        </Link>
        <NavbarActions>
          <NavList direction="horizontal" />
          <Divider height="20px" ml="2" borderColor="black" orientation="vertical" />
          <span>
            <LanguageButton />
          </span>
          <ReservarButton />
          <BurguerButton>
            <Button onClick={() => setOpenNavbarMenu(true)} height="100%" ariaLabel="abrir menú">
              <Icon icon="burger" color="#3D63A9" ariaLabel="menú hamburguesa" />
            </Button>
          </BurguerButton>
        </NavbarActions>
      </Container>
    </Header>
  );
};

export default Navbar;
