import React from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Categories from '../categories/categories';
import Page from '../page/page';
import Pagination from '../pagination/pagination';
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <Breadcrumbs />
      <div className="main__wrapper container">
        <Categories />
        <Page />
      </div>
      <Pagination />
    </div>
  );
};

export default Main;
