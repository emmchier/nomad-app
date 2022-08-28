import React, { FC, useContext } from 'react';
import Image from 'next/image';

import { Box, Heading, Text } from '@chakra-ui/react';
import Button from '../../../atoms/button';
import { GlobalDataContext } from '../../../../../context';
import { unslugify } from '../../../../../utils';
import { capitalizeFirstLetter } from '../../../../../utils/index';

import { Content, ImageContainer, InfoContainer } from './styles';

interface MenuReserveItemI {
  img?: string;
  alt?: string;
  name?: string;
  description?: string;
  services?: string[];
  price?: number;
}

const MenuReserveItem: FC<MenuReserveItemI> = ({
  img = '',
  alt = '',
  name = '',
  description = '',
  services = [],
  price = '',
}) => {
  const { setOpenReserveMenu } = useContext(GlobalDataContext);

  const handleReserve = () => {
    setOpenReserveMenu(false);
    console.log('Reservaste!');
  };

  const separatedServices = services
    .map((service: string) => capitalizeFirstLetter(unslugify(service)))
    .join(' • ');
  console.log(separatedServices);

  return (
    <Content>
      <ImageContainer>
        <Image
          src={img ? img : ''}
          alt={alt}
          objectFit="cover"
          width="230px"
          height="230px"
          priority
        />
      </ImageContainer>
      <InfoContainer>
        <span>
          <Box>
            <Heading as="h3" fontWeight="extrabold" fontSize={25}>
              {name}
            </Heading>
            <Text mt={2}>{description}</Text>
          </Box>
          <Text color="grey.main" fontSize={13}>
            {separatedServices}
          </Text>
          <Text color="grey.main">
            Desde <b>${price}/Noche</b>
          </Text>
          <Button ariaLabel="reservar ahora" onClick={handleReserve}>
            Reservar Ahora
          </Button>
        </span>
      </InfoContainer>
    </Content>
  );
};

export default MenuReserveItem;
