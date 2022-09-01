import React, { FC, useState } from 'react';
import { UIContext } from '../context';

interface Proptypes {
  children: React.ReactNode;
}

const UIProvider: FC<Proptypes> = ({ children }) => {
  const [cursorType, setCursorType] = useState('');
  const [openNavbarMenu, setOpenNavbarMenu] = useState(false);
  const [openReserveMenu, setOpenReserveMenu] = useState(false);

  const [showSnackbar, setShowSnackbar] = useState({
    isShowing: false,
    message: '',
  });

  return (
    <UIContext.Provider
      value={{
        openNavbarMenu,
        setOpenNavbarMenu,
        openReserveMenu,
        setOpenReserveMenu,
        showSnackbar,
        setShowSnackbar,
        cursorType,
        setCursorType,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
