import React, { FC } from 'react';

import { Box, Container, Divider, Grid, GridItem, Heading, Text } from '@chakra-ui/react';

import { FooterContent } from './styles';
import Icon from '../../atoms/icon';
import { FooterTypes, NavLink } from '../../../../interfaces';
import NavList from '../../organisms/nav-list';
import SocialNetworkList from '../../organisms/social-network-list';

interface FooterI {
  data: FooterTypes;
  navList?: NavLink[];
}

const Footer: FC<FooterI> = ({ data, navList }) => {
  const { prefix, phone, email, socialMedia } = data;

  return (
    <FooterContent>
      <Container>
        <Box display="flex">
          {['primary.main', 'green.main', 'magenta.main', 'success', 'orange.main'].map(
            (color, index) => (
              <Divider key={index} borderColor={color} borderBottomWidth="2px" />
            )
          )}
        </Box>

        <Grid templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6} py="60px">
          <GridItem
            display="flex"
            alignItems={{ base: 'center', lg: 'flex-start' }}
            flexDirection="column"
          >
            <Icon icon="brand" ariaLabel="logo de Nomad" />
            <Text
              my="30px"
              w={{ base: '76%', lg: '100%' }}
              textAlign={{ base: 'center', lg: 'start' }}
            >
              Here we should have a few words about what and who the company is. This should serve
              well for SEO purposes.
            </Text>
            <SocialNetworkList list={socialMedia || []} />
          </GridItem>
          <GridItem>
            <Box
              mt="30px"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              flexDirection="column"
            >
              <Box
                display="flex"
                alignItems={{ base: 'center', lg: 'flex-start' }}
                flexDirection="column"
              >
                <Heading variant="h3" as="h6" fontWeight="bold" fontSize="24px">
                  Contacta con nosotros
                </Heading>
                <Text fontSize="17px" my="16px" mb="3px">
                  <a href={`tel:${prefix}${phone}`}>T: {`(${prefix}) ${phone}`}</a>
                </Text>
                <Text fontSize="17px">
                  <a href={`mailto:${email}`}>E: {email}</a>
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem display={{ base: 'none', lg: 'block' }}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <NavList list={navList || []} showLast={true} />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </FooterContent>
  );
};

export default Footer;
