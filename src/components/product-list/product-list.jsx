import React, { useEffect, useState } from 'react';
import Product from '../product/product.jsx';
import './product-list.scss';
import ProjectService from '../../services/projectService.js';
import {connect} from 'react-redux';
import {onFetchProductsAction} from '../../actions/index.js';

const projectService = new ProjectService();

const ProductList = (props) => {
  const {productsData, page, onFetchProducts} = props;

  const getProducts = async () => {
    const response = await projectService.getProducts();

    onFetchProducts(response);
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
        productsData &&
        sortProductsByPage(productsData, page).map((item) => {
          return (
            <li className="product__list-item" key={item.id}>
              <Product
                id={item.id}
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

const mapStateToProps = (state) => {
  return {
    productsData: state.productsData,
    page: state.page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProducts: (products) => dispatch(onFetchProductsAction(products))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
