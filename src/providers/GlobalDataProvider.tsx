import { useRouter } from 'next/router';
import React, { FC } from 'react';

import { GlobalDataContext } from '../context/index';
import useFecthData from '../hooks/useFecthData';
import { City } from '../interfaces';

interface Proptypes {
  children: React.ReactNode;
}

const GlobalDataProvider: FC<Proptypes> = ({ children }) => {
  const { state: homeData } = useFecthData('/home');
  const { state: navList } = useFecthData('/nav');
  const { state: footerData } = useFecthData('/footer');
  const { state: hotelsData } = useFecthData('/hotels/availability');

  const router = useRouter();
  const { locale } = router;

  const hotel = locale === 'es' ? hotelsData?.cities?.es : hotelsData?.cities?.en;

  const cities = hotel?.map((city: City) => city);

  return (
    <GlobalDataContext.Provider
      value={{
        navList,
        homeData,
        footerData,
        cities,
      }}
    >
      {children}
    </GlobalDataContext.Provider>
  );
};

export default GlobalDataProvider;
