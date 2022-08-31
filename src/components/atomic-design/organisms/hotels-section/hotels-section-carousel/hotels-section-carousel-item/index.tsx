import React, { FC } from 'react';

import {
  Box,
  Collapse,
  Divider,
  Heading,
  ListItem,
  SlideFade,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Banner, Content, BannerHeader, BannerServices, ImageContainer } from './styles';
import { LocationIcon } from '../../../../../ui/svg';
import { getColor, getServiceIcon, slugify } from '../../../../../../utils';
import Image from 'next/image';
import CustomList from '../../../../atoms/list';
import { getFamily } from '../../../../../../utils/index';

interface HotelsSectionCarouselItemI {
  city?: string;
  name?: string;
  description?: string;
  services?: string[];
}

const HotelsSectionCarouselItem: FC<HotelsSectionCarouselItemI> = ({
  city = '',
  name = '',
  description = '',
  services = [],
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Content>
      <ImageContainer>
        <Image
          src={`/images/${slugify(name)}.png` || ''}
          alt={`Imágen de Hotel ${name}`}
          objectFit="cover"
          width="100%"
          height="100%"
          priority
        />
      </ImageContainer>
      <Banner onMouseEnter={onToggle} onMouseLeave={onToggle} hover={isOpen} color={getColor(name)}>
        <BannerHeader>
          <Box display="flex">
            <LocationIcon color="white" />
            <Text fontSize="17px">{city}</Text>
          </Box>
          <Heading
            as="h4"
            fontSize="60px"
            fontWeight={name === 'Urban' ? 'black' : 'semibold'}
            letterSpacing={name === 'Urban' ? 10 : 0}
            fontFamily={getFamily(name)}
            textTransform={name === 'Urban' ? 'uppercase' : 'capitalize'}
          >
            {name}
          </Heading>
        </BannerHeader>
        <Collapse in={isOpen} animateOpacity>
          <SlideFade in={isOpen} offsetY="20px">
            <Text margin="16px 0">{description}</Text>
            <Divider borderColor={getColor(name)} borderBottomWidth="2px" />
            <Text margin="16px 0">Servicios de este hotel</Text>
            <BannerServices>
              <CustomList direction="horizontal">
                {services?.map((service: string) => (
                  <ListItem key={service}>{getServiceIcon(service, 'white')}</ListItem>
                ))}
              </CustomList>
            </BannerServices>
          </SlideFade>
        </Collapse>
      </Banner>
    </Content>
  );
};

export default HotelsSectionCarouselItem;
