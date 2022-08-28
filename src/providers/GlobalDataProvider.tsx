import React, { FC, useState } from 'react';

import { GlobalDataContext } from '../context/index';
import useFecthData from '../hooks/useFecthData';
import { City } from '../interfaces';

interface Proptypes {
  children: React.ReactNode;
}

const GlobalDataProvider: FC<Proptypes> = ({ children }) => {
  const { state: navList } = useFecthData('/nav');
  const { state: footerData } = useFecthData('/footer');
  const { state: hotelsData } = useFecthData('/hotels/availability');

  const [openNavbarMenu, setOpenNavbarMenu] = useState(false);
  const [openReserveMenu, setOpenReserveMenu] = useState(false);

  const [showSnackbar, setShowSnackbar] = useState({
    isShowing: false,
    message: '',
  });

  const cities = hotelsData?.cities?.map((city: City) => city);

  return (
    <GlobalDataContext.Provider
      value={{
        navList,
        footerData,
        cities,
        openNavbarMenu,
        setOpenNavbarMenu,
        openReserveMenu,
        setOpenReserveMenu,
        showSnackbar,
        setShowSnackbar,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
