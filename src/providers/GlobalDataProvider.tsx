import React, { FC, useState } from 'react';

import { GlobalDataContext } from '../context/index';
import useFecthData from '../hooks/useFecthData';

interface Proptypes {
  children: React.ReactNode;
}

const GlobalDataProvider: FC<Proptypes> = ({ children }) => {
  const { state: navList } = useFecthData('/nav');
  const { state: footerData } = useFecthData('/footer');

  const [openNavbarMenu, setOpenNavbarMenu] = useState(false);
  const [openReserveMenu, setOpenReserveMenu] = useState(false);

  return (
    <GlobalDataContext.Provider
      value={{
        navList,
        footerData,
        openNavbarMenu,
        setOpenNavbarMenu,
        openReserveMenu,
        setOpenReserveMenu,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
