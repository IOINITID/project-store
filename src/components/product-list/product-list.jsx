import React, { useEffect, useState } from 'react';
import Product from '../product/product.jsx';
import './product-list.scss';
import ProjectService from '../../services/projectService.js';

const projectService = new ProjectService();

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const getProducts = async () => {
    const response = await projectService.getProducts();

    setProducts(response);
    console.log(response);
  };

  const sortProductsByPage = (productItems, pageNumber) => {
    const PRODUCTS_ON_PAGE = 15;
    const productsFrom = pageNumber > 1 ? pageNumber * PRODUCTS_ON_PAGE - PRODUCTS_ON_PAGE : pageNumber - 1;
    const productsTo = pageNumber * PRODUCTS_ON_PAGE;
    const productsToShow = [...productItems.slice(productsFrom, productsTo)];

    return productsToShow;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ul className="product__list">
      {
        products &&
        sortProductsByPage(products, page).map((item) => {
          return (
            <li className="product__list-item" key={item.id}>
              <Product
                name={item.name}
                image={item.photo}
                price={item.price}
                quantity={item.quantity}
                weight={item.weight}
                discount={item.discount}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default ProductList;
