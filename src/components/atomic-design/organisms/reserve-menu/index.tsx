import React, { FC, useContext, useEffect, useState } from 'react';

import { GlobalDataContext } from '../../../../context';
import { Hotel } from '../../../../interfaces';
import CustomDrawer from '../../molecules/drawer';
import MenuReserveItem from './menu-reserve-item';
import { City } from '../../../../interfaces/index';
import { Heading } from '@chakra-ui/react';

const ReserveMenu: FC = () => {
  const { openReserveMenu, setOpenReserveMenu, cities } = useContext(GlobalDataContext);

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
      content={city?.hotels?.map((hotel: Hotel) =>
        hotel.available === true ? (
          <MenuReserveItem
            key={hotel.name}
            img={hotel.img}
            alt={hotel.name}
            name={hotel.name}
            description={hotel.description}
            services={hotel.services}
            price={hotel.price}
          />
        ) : (
          <p>This hotel is not available</p>
        )
      )}
      styles={{ p: 3 }}
    />
  );
};

export default ReserveMenu;
