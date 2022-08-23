import { FC } from 'react';

import { Box, Collapse, useDisclosure } from '@chakra-ui/react';

interface CollapseI {
  children: React.ReactNode;
  collapsibleItem: React.ReactNode | React.ReactElement;
}

const Collapsible: FC<CollapseI> = ({ children, collapsibleItem = 'contenido' }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box onClick={onToggle}>{collapsibleItem}</Box>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </>
  );
};

export default Collapsible;
