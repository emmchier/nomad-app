import React, { FC, useContext } from 'react';

import { ListItem, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';
import Collapsible from '../../../atoms/collapse';
import CustomList from '../../../atoms/list';
import { Content } from './styles';
import { UIContext } from '../../../../../context';

interface NavbarSubmenuI {
  header?: React.ReactNode | React.ReactElement;
  subItems: string[] | any;
  setExpand: (e: boolean) => void;
  expand?: boolean;
}

const NavbarSubmenu: FC<NavbarSubmenuI> = ({ header, subItems, expand, setExpand }) => {
  const { setCursorType, setOpenNavbarMenu } = useContext(UIContext);
  const [isMobile] = useMediaQuery(['(max-width: 767px)', '(display-mode: browser)']);

  return (
    <Content>
      <Collapsible collapsibleItem={header} onClick={() => setExpand(!expand)}>
        <CustomList direction="vertical">
          {subItems.map((subItem: string, index: number) => (
            <ListItem key={index}>
              <Link href="[#!]" as="#!" passHref>
                <a
                  onMouseEnter={() => setCursorType('hovered')}
                  onMouseLeave={() => setCursorType('')}
                  onClick={() => isMobile && setOpenNavbarMenu(false)}
                >
                  {subItem}
                </a>
              </Link>
            </ListItem>
          ))}
        </CustomList>
      </Collapsible>
    </Content>
  );
};

export default NavbarSubmenu;
