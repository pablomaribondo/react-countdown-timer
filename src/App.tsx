import { FC } from 'react';

import { Countdown } from './components/Countdown';

import './App.scss';

export const App: FC = () => {
  return (
    <div className="wrapper">
      <Countdown date="August 31 2022 10:00 GMT+2" />
    </div>
  );
};
