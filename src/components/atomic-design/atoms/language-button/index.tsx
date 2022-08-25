import React, { FC, useState } from 'react';

import Button from '../button';
import Icon from '../icon';

const LanguageButton: FC = () => {
  const [label, setLabel] = useState(true);

  const handleLenguage = () => {
    setLabel(!label);
  };
  return (
    <Button
      onClick={handleLenguage}
      variant="text"
      height="100%"
      ariaLabel="traducir al inglés"
      iconLeft={true}
      icon={<Icon ariaLabel="icono universal" icon="language" />}
    >
      {label === true ? 'English' : 'Español'}
    </Button>
  );
};

export default LanguageButton;
