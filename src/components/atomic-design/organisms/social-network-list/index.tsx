import React, { FC } from 'react';

import { ListItem } from '@chakra-ui/react';

import { SocialMedia } from '../../../../interfaces';
import { capitalizeFirstLetter } from '../../../../utils';

import CustomList from '../../atoms/list';
import Icon from '../../atoms/icon';

interface SocialNetworkListI {
  list: SocialMedia[];
  direction?: string;
}

const SocialNetworkList: FC<SocialNetworkListI> = ({ list, direction = 'horizontal' }) => (
  <CustomList direction={direction}>
    {list?.map((item: SocialMedia) => (
      <ListItem
        as="li"
        key={item.slug}
        _hover={{ bg: 'grey.blur' }}
        cursor="pointer"
        mr={direction === 'horizontal' ? '4' : '0'}
        p="12px"
        transform="translateX(-12px) translateY(-12px)"
        borderRadius="30px"
      >
        <a href={`https://${item.link}`} target="_blank">
          <Icon icon={item.slug} ariaLabel={`Icono de ${capitalizeFirstLetter(item.slug || '')}`} />
        </a>
      </ListItem>
    ))}
  </CustomList>
);

export default SocialNetworkList;
