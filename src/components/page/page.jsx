import React from 'react';
import Filter from '../filter/filter.jsx';
import Pagination from '../pagination/pagination.jsx';
import ProductList from '../product-list/product-list.jsx';
import './page.scss';

const Page = () => {
  return (
    <div className="page">
      <h2 className="page__title">Сыры козьи, овечьи</h2>

      <Filter />

      <ProductList />

      <Pagination />
    </div>
  );
};

export default Page;
