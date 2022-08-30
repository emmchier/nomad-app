import React, { FC } from 'react';

import { Heading, Text } from '@chakra-ui/react';
import ProgressBar from '../../../../atoms/progress-bar';
import { Content } from './styles';

interface HomeSectionCarouselItemI {
  index?: number;
  title?: string;
  timeLapse?: number;
}

const HomeSectionCarouselItem: FC<HomeSectionCarouselItemI> = ({
  index,
  title = '',
  timeLapse = 2500,
}) => {
  return (
    <Content>
      <Text fontWeight="semiBold">{index}</Text>
      <Text fontWeight="extrabold">{title}</Text>
      {/* <ProgressBar timeLapse={timeLapse} /> */}
    </Content>
  );
};

export default HomeSectionCarouselItem;
