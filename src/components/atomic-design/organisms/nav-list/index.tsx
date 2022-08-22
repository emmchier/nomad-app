import React, { FC, useContext } from 'react';
import Link from 'next/link';

import { ListItem } from '@chakra-ui/react';

import { NavLink } from '../../../../interfaces';
import { slugify } from '../../../../utils';

import CustomList from '../../atoms/list';
import { GlobalDataContext } from '../../../../context/index';

interface NavListI {
  direction?: string;
  showLast?: boolean;
}

const NavList: FC<NavListI> = ({ direction = 'vertical', showLast = false }) => {
  const { navList } = useContext(GlobalDataContext);
  const filterItems = () =>
    showLast === true
      ? navList
      : navList.filter((item: NavLink) => slugify(item.title) !== 'inversores');

  return (
    <nav role="navigation">
      <CustomList direction={direction}>
        {filterItems()?.map((item: NavLink) => (
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
            <Link href="[#!]" as="#!" passHref>
              <a>{item.title}</a>
            </Link>
          </ListItem>
        ))}
      </CustomList>
    </nav>
  );
};

export default NavList;
