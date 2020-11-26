import React from 'react';
import Product from '../product/product.jsx';
import './product-list.scss';

const ProductList = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <ul className="product__list">
      {
        items.map((item) => {
          return (
            <li className="product__list-item" key={item}>
              <Product />
            </li>
          );
        })
      }
    </ul>
  );
};

export default ProductList;
