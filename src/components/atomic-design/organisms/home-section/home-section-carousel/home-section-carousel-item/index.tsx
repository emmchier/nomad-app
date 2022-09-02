import React, { FC } from 'react';

import { Text } from '@chakra-ui/react';
import { Content } from './styles';

interface HomeSectionCarouselItemI {
  index?: number;
  title?: string;
  timeLapse?: number;
}

const HomeSectionCarouselItem: FC<HomeSectionCarouselItemI> = ({ index, title = '' }) => {
  return (
    <Content>
      <Text fontWeight="semiBold">{index}</Text>
      <Text fontWeight="extrabold">{title}</Text>
    </Content>
  );
};

export default HomeSectionCarouselItem;
