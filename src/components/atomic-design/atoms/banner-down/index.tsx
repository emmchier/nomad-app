import { Box, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';

const BannerDown: FC = () => {
  return (
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
        Gracias por scrollear :)
      </Heading>
    </Box>
  );
};

export default BannerDown;
