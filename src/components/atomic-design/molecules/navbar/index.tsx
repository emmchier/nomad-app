import React, { FC } from 'react';

import Link from 'next/link';
import { NavLink } from '../../../../interfaces';

import { Container, Divider } from '@chakra-ui/react';
import Icon from '../../atoms/icon';
import NavList from '../../organisms/nav-list';
import Button from '../../atoms/button';

import { Header, NavbarActions, Brand, BurguerButton } from './styles';

interface NavbarI {
  list: NavLink[];
}

const Navbar: FC<NavbarI> = ({ list }) => {
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
          <NavList list={list || []} direction="horizontal" />
          <Divider height="20px" ml="2" borderColor="black" orientation="vertical" />
          <span>
            <Button variant="text" height="100%" ariaLabel="traducir al inglés">
              English
            </Button>
          </span>
          <Button
            ariaLabel="reservar"
            iconLeft={true}
            icon={<Icon ariaLabel="icono calendario" icon="calendar" color="white" />}
          >
            Reservar
          </Button>
          <BurguerButton>
            <Button height="100%" ariaLabel="abrir menú">
              <Icon icon="burger" color="#3D63A9" ariaLabel="menú hamburguesa" />
            </Button>
          </BurguerButton>
        </NavbarActions>
      </Container>
    </Header>
  );
};

export default Navbar;
