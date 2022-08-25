import { FC } from 'react';

import { Box, Collapse, useDisclosure } from '@chakra-ui/react';

interface CollapseI {
  children: React.ReactNode;
  collapsibleItem: React.ReactNode | React.ReactElement;
  onClick: () => void;
}

const Collapsible: FC<CollapseI> = ({ children, collapsibleItem = 'contenido', onClick }) => {
  const { isOpen, onToggle } = useDisclosure();

  const handleToogle = () => {
    onToggle();
    onClick();
  };

  return (
    <>
      <Box onClick={handleToogle}>{collapsibleItem}</Box>
      <Collapse in={isOpen} animateOpacity>
        {children}
      </Collapse>
    </>
  );
};

export default Collapsible;
