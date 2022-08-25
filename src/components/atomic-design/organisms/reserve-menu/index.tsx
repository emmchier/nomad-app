import React, { FC, useContext } from 'react';

import { GlobalDataContext } from '../../../../context';
import CustomDrawer from '../../molecules/drawer';

const ReserveMenu: FC = () => {
  const { openReserveMenu, setOpenReserveMenu } = useContext(GlobalDataContext);

  return (
    <CustomDrawer
      open={openReserveMenu}
      setOpen={setOpenReserveMenu}
      size="lg"
      title="Reservar"
      content={<div>LALALALALALAL</div>}
      showFooter={true}
    />
  );
};

export default ReserveMenu;
