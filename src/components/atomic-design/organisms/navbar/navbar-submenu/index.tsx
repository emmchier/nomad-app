import React, { FC } from 'react';

import { ListItem } from '@chakra-ui/react';
import Link from 'next/link';
import Collapsible from '../../../atoms/collapse';
import CustomList from '../../../atoms/list';
import { NavLink } from '../../../../../interfaces';
import { Content } from './styles';

interface NavbarSubmenuI {
  label?: string;
  subItems: string[] | any;
}

const NavbarSubmenu: FC<NavbarSubmenuI> = ({ label = '', subItems }) => {
  return (
    <Content>
      <Collapsible collapsibleItem={label}>
        <CustomList direction="vertical">
          {subItems.map((subItem: string) => (
            <ListItem key={subItem}>
              <Link href="[#!]" as="#!" passHref>
                <a>{subItem}</a>
              </Link>
            </ListItem>
          ))}
        </CustomList>
      </Collapsible>
    </Content>
  );
};

export default NavbarSubmenu;
