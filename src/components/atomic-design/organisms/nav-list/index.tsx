import React, { FC, useContext, useState } from 'react';
import Link from 'next/link';

import { ListItem, useMediaQuery } from '@chakra-ui/react';

import { getLinkLabel, slugify } from '../../../../utils';

import CustomList from '../../atoms/list';
import { GlobalDataContext, UIContext } from '../../../../context/index';
import NavbarSubmenu from '../navbar/navbar-submenu';
import { NavLink } from '../../../../interfaces/index';
import NavbarSubmenuHeader from '../navbar/navbar-submenu/navbar-submenu-header';
import Dropdown from '../../molecules/dropdown';
import { DropdownContainer } from '../../molecules/dropdown/styles';
import { Nav } from './styles';
import { useRouter } from 'next/router';

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
  const { setCursorType } = useContext(UIContext);

  const router = useRouter();
  const { locale } = router;
  const nav = locale === 'es' ? navList.es : navList.en;

  const hiddeItems = (hideAction: string) => {
    switch (hideAction) {
      case 'single':
        return nav?.filter(
          (item: NavLink) => slugify(item.title) !== getLinkLabel(locale, 'inversores', 'investors')
        );
      case 'all':
        return nav?.filter(
          (item: NavLink) =>
            slugify(item.title) !== getLinkLabel(locale, 'inversores', 'investors') &&
            slugify(item.title) !== getLinkLabel(locale, 'unete', 'join-up')
        );
      case 'none':
        return nav;
      default:
        return nav;
    }
  };

  return (
    <Nav role="navigation">
      <CustomList direction={direction}>
        {hiddeItems(hideItems)?.map((item: NavLink, index: number) =>
          item?.activities?.length === undefined || item?.activities?.length < 0 ? (
            <ListItem
              key={index}
              borderRadius="8px"
              cursor="pointer"
              mr="2"
              px={direction === 'horizontal' ? '4' : '0'}
              py="2.5"
            >
              <Link href="[#!]" as="#!" passHref>
                <a
                  onMouseEnter={() => setCursorType('hovered')}
                  onMouseLeave={() => setCursorType('')}
                >
                  {item.title}
                </a>
              </Link>
            </ListItem>
          ) : isNavRes === true ? (
            <NavbarSubmenu
              expand={expand}
              key={index}
              setExpand={setExpand}
              header={<NavbarSubmenuHeader item={item.title} expand={expand} />}
              subItems={item?.activities}
            />
          ) : (
            <li key={index}>
              {isSubmenu ? (
                <DropdownContainer>
                  <Dropdown item={item.title}>
                    <CustomList direction="vertical">
                      {item?.activities.map((activity: string, index: number) => (
                        <ListItem key={index}>
                          <Link
                            href="#!"
                            onMouseEnter={() => setCursorType('hovered')}
                            onMouseLeave={() => setCursorType('')}
                          >
                            <a
                              onMouseEnter={() => setCursorType('hovered')}
                              onMouseLeave={() => setCursorType('')}
                            >
                              {activity}
                            </a>
                          </Link>
                        </ListItem>
                      ))}
                    </CustomList>
                  </Dropdown>
                </DropdownContainer>
              ) : (
                <a
                  key={index}
                  onMouseEnter={() => setCursorType('hovered')}
                  onMouseLeave={() => setCursorType('')}
                >
                  {item.title}
                </a>
              )}
            </li>
          )
        )}
      </CustomList>
    </Nav>
  );
};

export default NavList;
