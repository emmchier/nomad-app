import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import Link from 'next/link';
import Button from '../components/atomic-design/atoms/button';
import Page from '../components/atomic-design/atoms/page';

const ErrorPage: NextPage = () => (
  <Page
    title="Upsss..."
    description="Something is wrong. Please back to home and keep have fun!"
    keywords="Error page"
    tag=""
  >
    <Box
      as="section"
      bg="white"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container>
        <Box>
          <Heading fontSize={80} as="h3">
            Error 404
          </Heading>
          <Text py="4" fontSize={40}>
            Don't worry.
          </Text>
          <Link href="/" passHref>
            <a>
              <Button ariaLabel="back to home page">Back to Home</Button>
            </a>
          </Link>
        </Box>
      </Container>
    </Box>
  </Page>
);

export default ErrorPage;
