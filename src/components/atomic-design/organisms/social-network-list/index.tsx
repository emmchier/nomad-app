import React, { FC, useContext } from 'react';

import { ListItem } from '@chakra-ui/react';

import { SocialMedia } from '../../../../interfaces';
import { capitalizeFirstLetter } from '../../../../utils';

import CustomList from '../../atoms/list';
import Icon from '../../atoms/icon';
import { UIContext } from '../../../../context';

interface SocialNetworkListI {
  list: SocialMedia[];
  direction?: string;
}

const SocialNetworkList: FC<SocialNetworkListI> = ({ list, direction = 'horizontal' }) => {
  const { setCursorType } = useContext(UIContext);

  return (
    <CustomList direction={direction}>
      {list?.map((item: SocialMedia, index: number) => (
        <ListItem
          as="li"
          key={index}
          cursor="pointer"
          mr={direction === 'horizontal' ? '4' : '0'}
          p="12px"
          transform="translateX(-12px) translateY(-12px)"
          borderRadius="30px"
        >
          <a
            href={`https://${item.link}`}
            target="_blank"
            onMouseEnter={() => setCursorType('hovered')}
            onMouseLeave={() => setCursorType('')}
          >
            <Icon
              icon={item.slug}
              ariaLabel={`Icono de ${capitalizeFirstLetter(item.slug || '')}`}
            />
          </a>
        </ListItem>
      ))}
    </CustomList>
  );
};

export default SocialNetworkList;
