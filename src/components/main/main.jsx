import React from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import Categories from '../categories/categories.jsx';
import Page from '../page/page.jsx';
import Pagination from '../pagination/pagination.jsx';
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
