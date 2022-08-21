import React, { FC } from 'react';

import { Box, Heading } from '@chakra-ui/react';

interface BannerDownI {
  text?: string;
}

const BannerDown: FC<BannerDownI> = ({ text = '' }) => (
  <Box
    position="fixed"
    bottom="0"
    zIndex="0"
    display="flex"
    alignItems="center"
    justifyContent="center"
    width="100%"
    py="50px"
    bg="primary.main"
  >
    <Heading variant="h4" fontWeight="300" color="white">
      {text}
    </Heading>
  </Box>
);

export default BannerDown;
