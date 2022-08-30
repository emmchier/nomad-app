import React, { FC, useEffect, useState } from 'react';
import { Content, Filler, Label } from './styles';

interface ProgressBarI {
  //   completed?: number;
  timeLapse?: number;
}

const ProgressBar: FC<ProgressBarI> = ({ timeLapse = 8500 }) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(100)), 8000);
  }, []);

  return (
    <Content>
      <Filler completed={completed}>
        <Label>{`${completed}%`}</Label>
      </Filler>
    </Content>
  );
};

export default ProgressBar;
