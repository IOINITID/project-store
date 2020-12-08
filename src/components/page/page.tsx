import React from 'react';
import Filter from '../filter/filter';
import ProductList from '../product-list/product-list';
import './page.scss';
import CatalogIcon from '../../assets/images/catalog-icon.svg';

const Page = () => {
  const isMobile = window.innerWidth <= 1024;

  return (
    <div className="page">
      <h2 className="page__title">Сыры козьи, овечьи</h2>
      {
        isMobile ? <div className="page__wrapper">
          <a className="header__button" href="#">
            <CatalogIcon className="header__button-icon" width="16" height="16" aria-label="Иконка меню." />
            Каталог
          </a>
          <Filter />
        </div> :
          <Filter />
      }
      <ProductList />
    </div>
  );
};

export default Page;
