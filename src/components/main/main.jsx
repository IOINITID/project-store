import React from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import Categories from '../categories/categories.jsx';
import Page from '../page/page.jsx';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <Breadcrumbs />
      <div className="main__wrapper">
        <Categories />
        <Page />
      </div>
    </div>
  );
};

export default Main;
