import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';
import './styles.css';

import { WorkbenchApp } from './WorkbenchApp';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <WorkbenchApp />
    </SWRConfig>
  </React.StrictMode>
);
