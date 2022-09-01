import React, { FC, useContext } from 'react';
import { UIContext } from '../../../../context';

import useMousePosition from '../../../../hooks/useMousePosition';
import { Content } from './styles';

const DotRing: FC = () => {
  const { cursorType } = useContext(UIContext);
  const { x, y } = useMousePosition();

  return (
    <Content>
      <div style={{ left: `${x}px`, top: `${y}px` }} className={'ring ' + cursorType}></div>
      <div className={'dot ' + cursorType} style={{ left: `${x}px`, top: `${y}px` }}></div>
    </Content>
  );
};

export default DotRing;
