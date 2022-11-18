import React, { ReactElement } from 'react';

import { Header, Main } from 'components';
import './App.style.scss';

export function App(): ReactElement {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}
