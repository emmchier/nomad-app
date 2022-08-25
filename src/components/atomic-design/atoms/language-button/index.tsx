import React, { FC, useState } from 'react';

import Button from '../button';
import Icon from '../icon';

interface LanguageButtonI {
  showIcon?: boolean;
}

const LanguageButton: FC<LanguageButtonI> = ({ showIcon = false }) => {
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
      iconLeft={showIcon}
      icon={<Icon ariaLabel="icono universal" icon="language" />}
    >
      {label === true ? 'English' : 'Español'}
    </Button>
  );
};

export default LanguageButton;
