import {
  SWITCH_PAGE,
  FETCH_PRODUCTS,
  SORT_PRODUCTS,
  FAVORITES_ADD,
  CART_ADD
} from '../utils/constants';

const onSwitchPageAction = (page) => {
  return {
    type: SWITCH_PAGE,
    payload: page
  };
};

const onFetchProductsAction = (products) => {
  return {
    type: FETCH_PRODUCTS,
    payload: products
  };
};

const onSortProductsAction = (filterType) => {
  return {
    type: SORT_PRODUCTS,
    payload: filterType
  };
};

const onFavoritesAddAction = (productId) => {
  return {
    type: FAVORITES_ADD,
    payload: productId
  };
};

const onCartAddAction = (productId) => {
  return {
    type: CART_ADD,
    payload: productId
  };
};

export {
  onSwitchPageAction,
  onFetchProductsAction,
  onSortProductsAction,
  onFavoritesAddAction,
  onCartAddAction
};
