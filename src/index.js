import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Search from './header/search';
import Header from './header/header';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    {/* <Header/> */}
    <App/>
   {/* <Search/> */}
  </>
);
