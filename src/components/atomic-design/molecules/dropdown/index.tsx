import React, { FC, useState } from 'react';

import { Container, Content, DropdownContent, DropdownItem, DropdownMenu } from './styles';

interface DropdownI {
  children: React.ReactNode;
  item?: string | React.ReactNode | React.ReactElement;
  label?: string;
  showIt?: boolean;
  headerAction?: boolean;
}

const Dropdown: FC<DropdownI> = ({ item, children, showIt = false }) => {
  const [show, setShow] = useState(showIt);

  return (
    <Container
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
    >
      <DropdownItem>{item}</DropdownItem>
      <Content
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
      >
        <DropdownMenu show={show && show} fade={show} onMouseLeave={() => setShow(false)}>
          <DropdownContent>{children}</DropdownContent>
        </DropdownMenu>
      </Content>
    </Container>
  );
};

export default Dropdown;
