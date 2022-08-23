import React, { FC, useContext } from 'react';
import Link from 'next/link';
var _ = require('lodash');

import { ListItem } from '@chakra-ui/react';

import { slugify } from '../../../../utils';

import CustomList from '../../atoms/list';
import { GlobalDataContext } from '../../../../context/index';
import NavbarSubmenu from '../navbar/navbar-submenu';
import { NavLink } from '../../../../interfaces/index';

interface NavListI {
  direction?: string;
  hideItems?: string;
  isNavRes?: boolean;
}

const NavList: FC<NavListI> = ({
  direction = 'vertical',
  hideItems = 'none',
  isNavRes = false,
}) => {
  const { navList } = useContext(GlobalDataContext);

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
    <nav role="navigation">
      <CustomList direction={direction}>
        {hiddeItems(hideItems)?.map((item: NavLink) => (
          <ListItem
            as="li"
            key={slugify(item.title)}
            borderRadius="8px"
            _hover={{ bg: 'grey.blur' }}
            cursor="pointer"
            mr="2"
            px={direction === 'horizontal' ? '4' : '0'}
            py="2.5"
          >
            {item?.activities?.length === undefined || item?.activities?.length < 0 ? (
              <Link href="[#!]" as="#!" passHref>
                <a>{item.title}</a>
              </Link>
            ) : isNavRes === true ? (
              <NavbarSubmenu label={item.title} subItems={item?.activities} />
            ) : (
              <>{item.title}</>
            )}
          </ListItem>
        ))}
      </CustomList>
    </nav>
  );
};

export default NavList;
