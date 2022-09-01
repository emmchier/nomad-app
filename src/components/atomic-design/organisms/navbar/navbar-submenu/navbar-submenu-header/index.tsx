import React, { FC } from 'react';

import { AddIcon, LessIcon } from '../../../../../ui/svg';
import { Content } from './styles';

interface NavbarSubmenuHeaderI {
  item?: string | React.ReactNode | React.ReactElement;
  expand?: boolean;
}

const NavbarSubmenuHeader: FC<NavbarSubmenuHeaderI> = ({ item = '', expand = false }) => {
  return (
    <Content>
      <a>{item}</a>
      {expand === false ? <AddIcon /> : <LessIcon />}
    </Content>
  );
};

export default NavbarSubmenuHeader;
