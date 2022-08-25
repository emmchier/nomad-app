import React, { FC, useContext, useState } from 'react';
import Link from 'next/link';

import { ListItem } from '@chakra-ui/react';

import { slugify } from '../../../../utils';

import CustomList from '../../atoms/list';
import { GlobalDataContext } from '../../../../context/index';
import NavbarSubmenu from '../navbar/navbar-submenu';
import { NavLink } from '../../../../interfaces/index';
import NavbarSubmenuHeader from '../navbar/navbar-submenu/navbar-submenu-header';
import Dropdown from '../../molecules/dropdown';
import { DropdownContainer } from '../../molecules/dropdown/styles';
import { Nav } from './styles';

interface NavListI {
  direction?: string;
  hideItems?: string;
  isNavRes?: boolean;
  isSubmenu?: boolean;
}

const NavList: FC<NavListI> = ({
  direction = 'vertical',
  hideItems = 'none',
  isNavRes = false,
  isSubmenu = true,
}) => {
  const { navList } = useContext(GlobalDataContext);
  const [expand, setExpand] = useState(false);

  const hiddeItems = (hideAction: string) => {
    switch (hideAction) {
      case 'single':
        return navList.filter((item: NavLink) => slugify(item.title) !== 'inversores');
      case 'all':
        return navList.filter(
          (item: NavLink) => slugify(item.title) !== 'inversores' && slugify(item.title) !== 'unete'
        );
      case 'none':
        return navList;
      default:
        return navList;
    }
  };

  return (
    <Nav role="navigation">
      <CustomList direction={direction}>
        {hiddeItems(hideItems)?.map((item: NavLink) =>
          item?.activities?.length === undefined || item?.activities?.length < 0 ? (
            <ListItem
              key={slugify(item.title)}
              borderRadius="8px"
              cursor="pointer"
              mr="2"
              px={direction === 'horizontal' ? '4' : '0'}
              py="2.5"
            >
              <Link href="[#!]" as="#!" passHref>
                <a>{item.title}</a>
              </Link>
            </ListItem>
          ) : isNavRes === true ? (
            <NavbarSubmenu
              expand={expand}
              setExpand={setExpand}
              header={<NavbarSubmenuHeader item={item.title} expand={expand} />}
              subItems={item?.activities}
            />
          ) : (
            <li>
              {isSubmenu ? (
                <DropdownContainer>
                  <Dropdown item={item.title}>
                    <CustomList direction="vertical">
                      {item?.activities.map((activity) => (
                        <ListItem>
                          <Link href="#!">{activity}</Link>
                        </ListItem>
                      ))}
                    </CustomList>{' '}
                  </Dropdown>
                </DropdownContainer>
              ) : (
                <a>{item.title}</a>
              )}
            </li>
          )
        )}
      </CustomList>
    </Nav>
  );
};

export default NavList;
