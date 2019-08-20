import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';
import Config from './pages/Config';
import Support from './pages/Support';

export default function Routes(){
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/config" component={Config} />
      <Route path="/support" component={Support} />
    </BrowserRouter>
  );
}