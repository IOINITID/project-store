import React, {useEffect} from 'react';
import Product from '../product/product.jsx';
import './product-list.scss';
import ProjectService from '../../services/projectService.js';
import {connect} from 'react-redux';
import {onFetchProductsAction} from '../../actions/index.js';
import PropTypes from 'prop-types';

const projectService = new ProjectService();

const ProductList = (props) => {
  const {productsData, page, onFetchProducts} = props;

  const getProducts = async () => {
    const response = await projectService.getProducts();

    onFetchProducts(response);
  };

  const sortProductsByPage = (productItems, pageNumber) => {
    const PRODUCTS_ON_PAGE = 15;
    const productsFrom = pageNumber > 1 ? pageNumber * PRODUCTS_ON_PAGE - PRODUCTS_ON_PAGE : pageNumber - 1;
    const productsTo = pageNumber * PRODUCTS_ON_PAGE;
    const productsToShow = [...productItems.slice(productsFrom, productsTo)];

    return productsToShow;
  };

  useEffect(() => {
    if (!productsData.length) {
      getProducts();
    }
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
                favorites={item.favorites}
                cart={item.cart}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

ProductList.propTypes = {
  productsData: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  onFetchProducts: PropTypes.func.isRequired
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
