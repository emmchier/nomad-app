import React, { FC, useContext } from 'react';
import Image from 'next/image';

import { Box, Heading, Text } from '@chakra-ui/react';
import Button from '../../../atoms/button';
import { GlobalDataContext, UIContext } from '../../../../../context';
import { getFamily, unslugify } from '../../../../../utils';
import { capitalizeFirstLetter } from '../../../../../utils/index';

import { Content, ImageContainer, InfoContainer, ItemField } from './styles';
import { useRouter } from 'next/router';

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
  const { setOpenReserveMenu, setShowSnackbar } = useContext(UIContext);

  const router = useRouter();
  const { locale } = router;

  const handleReserve = (snackbarMessage: string) => {
    setOpenReserveMenu(false);
    setShowSnackbar({
      isShowing: true,
      message: snackbarMessage,
    });
  };

  const separatedServices = services
    .map((service: string) => capitalizeFirstLetter(unslugify(service)))
    .join(' • ');

  return (
    <Content>
      <ImageContainer>
        <Image
          src={img ? img : ''}
          alt={alt}
          objectFit="cover"
          width="100%"
          height="100%"
          priority
        />
      </ImageContainer>
      <InfoContainer>
        <span>
          <ItemField>
            <Heading
              as="h3"
              fontWeight={name === 'Urban' ? 900 : 600}
              letterSpacing={name === 'Urban' ? 4 : 0}
              textTransform={name === 'Urban' ? 'uppercase' : 'capitalize'}
              fontSize={name === 'Tribe' ? 40 : 25}
              fontFamily={getFamily(name)}
            >
              {name}
            </Heading>
            <Text mt={2}>{description}</Text>
          </ItemField>
          <ItemField>
            <Text color="grey.main" fontSize={13}>
              {separatedServices}
            </Text>
          </ItemField>
          <ItemField>
            <Text color="grey.main">
              {locale === 'es' ? 'Desde' : 'Since'}{' '}
              <b>
                ${price}/{locale === 'es' ? 'Noche' : 'Night'}
              </b>
            </Text>
          </ItemField>
          <Button
            ariaLabel={locale === 'es' ? '"reservar ahora"' : 'reserve now'}
            classes="add-custom-cursor"
            onClick={() =>
              handleReserve(
                locale === 'es'
                  ? `Tu reserva en hotel ${name} fue confirmada`
                  : `Your reservation at ${name} hotel was confirmed`
              )
            }
          >
            {locale === 'es' ? 'Reservar Ahora' : 'Reserve now'}
          </Button>
        </span>
      </InfoContainer>
    </Content>
  );
};

export default MenuReserveItem;
