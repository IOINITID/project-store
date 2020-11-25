import React, {Fragment} from 'react';
import Product from '../product/product.jsx';
import './product-list.scss';

const ProductList = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ul className="product__list">
      {
        items.map((item, index) => {
          return (
            <li className="product__list-item" key={index}>
              <Product />
            </li>
          );
        })
      }
    </ul>
  );
};

export default ProductList;
