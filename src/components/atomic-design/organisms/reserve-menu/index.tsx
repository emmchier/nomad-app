import React, { FC, useContext, useEffect, useState } from 'react';

import { UIContext } from '../../../../context';
import { Hotel } from '../../../../interfaces';
import CustomDrawer from '../../molecules/drawer';
import MenuReserveItem from './menu-reserve-item';
import { City } from '../../../../interfaces/index';
import { Heading } from '@chakra-ui/react';
import { GlobalDataContext } from '../../../../context/index';

const ReserveMenu: FC = () => {
  const { openReserveMenu, setOpenReserveMenu } = useContext(UIContext);
  const { cities } = useContext(GlobalDataContext);

  const [city, setCity] = useState<City>({});

  useEffect(() => {
    const item = cities?.find((city: City) => city.name === 'Arequipa');
    setCity(item);
  }, [openReserveMenu]);

  return (
    <CustomDrawer
      open={openReserveMenu}
      setOpen={setOpenReserveMenu}
      size="lg"
      title={
        <Heading as="h4" fontWeight="extrabold" fontSize={36}>
          Reservar
        </Heading>
      }
      content={city?.hotels?.map((hotel: Hotel, index: number) =>
        hotel.available === true ? (
          <MenuReserveItem
            key={index}
            img={hotel.img}
            alt={hotel.name}
            name={hotel.name}
            description={hotel.description}
            services={hotel.services}
            price={hotel.price}
          />
        ) : (
          <p key={index}>This hotel is not available</p>
        )
      )}
      styles={{ p: 3 }}
    />
  );
};

export default ReserveMenu;
