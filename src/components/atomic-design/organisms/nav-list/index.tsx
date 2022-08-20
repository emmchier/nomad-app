import React, { FC } from 'react';
import Link from 'next/link';

import { ListItem } from '@chakra-ui/react';

import { NavLink } from '../../../../interfaces';
import { slugify } from '../../../../utils';

import CustomList from '../../atoms/list';

interface NavListI {
  list: NavLink[];
  direction?: string;
  showLast?: boolean;
}

const NavList: FC<NavListI> = ({ list, direction = 'vertical', showLast = false }) => {
  const filterItems = () =>
    showLast === true ? list : list.filter((item) => slugify(item.title) !== 'inversores');

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
            p={direction === 'horizontal' ? '4' : '0'}
          >
            <Link href="/#!">{item.title}</Link>
          </ListItem>
        ))}
      </CustomList>
    </nav>
  );
};

export default NavList;
