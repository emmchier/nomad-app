import React, { FC, useContext } from 'react';

import Link from 'next/link';

import { Container, Divider } from '@chakra-ui/react';
import Icon from '../../atoms/icon';
import NavList from '../../organisms/nav-list';
import Button from '../../atoms/button';

import { Header, NavbarActions, Brand, BurguerButton } from './styles';
import { UIContext } from '../../../../context';
import LanguageButton from '../../atoms/language-button';
import ReserveButton from '../../atoms/reserve-button';
import { useRouter } from 'next/router';

const Navbar: FC = () => {
  const { setOpenNavbarMenu, setCursorType } = useContext(UIContext);

  const router = useRouter();
  const { locale } = router;

  return (
    <Header>
      <Container display="flex" alignItems="center" justifyContent="space-between">
        <Link href="/" as="/" passHref>
          <a onMouseEnter={() => setCursorType('hovered')} onMouseLeave={() => setCursorType('')}>
            <Brand>
              <Icon icon="brand" ariaLabel={locale === 'es' ? 'logo de Nomad' : 'Nomad logo'} />
            </Brand>
          </a>
        </Link>
        <NavbarActions>
          <NavList direction="horizontal" hideItems="single" />
          <Divider height="20px" ml="2" borderColor="black" orientation="vertical" />
          <span>
            <LanguageButton />
          </span>
          <ReserveButton />
          <BurguerButton>
            <Button
              onClick={() => setOpenNavbarMenu(true)}
              height="100%"
              ariaLabel={locale === 'es' ? 'abrir menú' : 'open menu'}
            >
              <Icon
                icon="burger"
                color="#3D63A9"
                ariaLabel={locale === 'es' ? 'icono hamburguesa' : 'burguer icon'}
              />
            </Button>
          </BurguerButton>
        </NavbarActions>
      </Container>
    </Header>
  );
};

export default Navbar;
