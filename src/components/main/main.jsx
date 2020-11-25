import React from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import Page from '../page/page.jsx';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <Breadcrumbs />
      <Page />
    </div>
  );
};

export default Main;
