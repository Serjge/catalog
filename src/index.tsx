import React from 'react';

import ReactDOM from 'react-dom/client';

import 'style/global.scss';
import 'index.scss';
import { App } from 'app';
import reportWebVitals from 'reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);

reportWebVitals();
