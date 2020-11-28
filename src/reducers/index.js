import { v4 as uuid } from 'uuid';

const initialState = {
  productsData: JSON.parse(window.localStorage.getItem(`productsData`)) || [],
  page: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `SWITCH_PAGE`:
      return {...state, page: action.payload};
    case `FETCH_PRODUCTS`:
      return {...state, productsData: action.payload};
    case `SORT_PRODUCTS_BY_PRICE_INCREASE`:
      const sortedProductsByPriceIncrease = state.productsData.slice().sort((a, b) => a.price - b.price);
      return {...state, productsData: sortedProductsByPriceIncrease};
    default:
      return state;
  }
};

export default reducer;
