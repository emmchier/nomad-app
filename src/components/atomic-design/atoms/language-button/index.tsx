import React, { FC, useState } from 'react';

import Button from '../button';

const LanguageButton: FC = () => {
  const [label, setLabel] = useState(true);

  const handleLenguage = () => {
    setLabel(!label);
  };
  return (
    <Button onClick={handleLenguage} variant="text" height="100%" ariaLabel="traducir al inglés">
      {label === true ? 'English' : 'Español'}
    </Button>
  );
};

export default LanguageButton;
