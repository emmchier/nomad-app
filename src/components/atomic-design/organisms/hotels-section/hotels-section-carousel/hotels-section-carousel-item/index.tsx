import React, { FC, useState } from 'react';

import {
  Box,
  Collapse,
  Divider,
  Heading,
  ListItem,
  SlideFade,
  Text,
  Tooltip,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { Banner, Content, BannerHeader, BannerServices, ImageContainer } from './styles';
import { LocationIcon } from '../../../../../ui/svg';
import { getColor, getServiceIcon, slugify } from '../../../../../../utils';
import Image from 'next/image';
import CustomList from '../../../../atoms/list';
import { getFamily, unslugify, capitalizeFirstLetter } from '../../../../../../utils/index';

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
  const [expand, setExpand] = useState(false);

  const [isMobile] = useMediaQuery(['(max-width: 767px)', '(display-mode: browser)']);

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
      <Banner
        onMouseEnter={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
        onClick={() => setExpand(!expand)}
        hover={expand}
        color={getColor(name)}
      >
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
        <Collapse in={expand} animateOpacity>
          <SlideFade in={expand} offsetY="20px">
            <Text margin="16px 0">{description}</Text>
            <Divider borderColor={getColor(name)} borderBottomWidth="2px" />
            <Text margin="16px 0">Servicios de este hotel</Text>
            <BannerServices>
              <CustomList direction="horizontal">
                {services?.map((service: string) => (
                  <Tooltip
                    as="li"
                    key={service}
                    label={!isMobile ? capitalizeFirstLetter(unslugify(service)) : ''}
                    placement="bottom"
                  >
                    <span>{getServiceIcon(service, 'white')}</span>
                  </Tooltip>
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
