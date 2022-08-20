import React, { FC } from 'react';

import Link from 'next/link';
import { NavLink } from '../../../../interfaces';

import { Box, Container, Divider, Flex } from '@chakra-ui/react';
import Icon from '../../atoms/icon';
import NavList from '../../organisms/nav-list';
import Button from '../../atoms/button';
import { NavbarActions } from './styles';

interface NavbarI {
  list: NavLink[];
}

const Navbar: FC<NavbarI> = ({ list }) => {
  return (
    <Flex as="header" py="6" position="fixed" w="100%" maxH="120px">
      <Container display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Box
            shadow="main"
            height="100%"
            display="flex"
            alignItems="center"
            p="6"
            borderRadius={16}
            cursor="pointer"
          >
            <Icon icon="brand" ariaLabel="Nomad branding" />
          </Box>
        </Link>
        <NavbarActions>
          <NavList list={list} direction="horizontal" />
          <Divider height="20px" ml="2" borderColor="black" orientation="vertical" />
          <Button variant="text" height="100%" ariaLabel="traducir al inglés">
            English
          </Button>
          <Button
            height="100%"
            ariaLabel="reservar"
            iconLeft={true}
            icon={<Icon ariaLabel="icono calendario" icon="calendar" color="white" />}
          >
            Reservar
          </Button>
        </NavbarActions>
      </Container>
    </Flex>
  );
};

export default Navbar;
