import {Actions} from '../utils/constants';

const onSwitchPageAction = (page) => {
  return {
    type: Actions.SWITCH_PAGE,
    payload: page
  };
};

const onFetchProductsAction = (products) => {
  return {
    type: Actions.FETCH_PRODUCTS,
    payload: products
  };
};

const onSortProductsAction = (filterType) => {
  return {
    type: Actions.SORT_PRODUCTS,
    payload: filterType
  };
};

const onFavoritesAddAction = (productId) => {
  return {
    type: Actions.FAVORITES_ADD,
    payload: productId
  };
};

const onCartAddAction = (productId) => {
  return {
    type: Actions.CART_ADD,
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
