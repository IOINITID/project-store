import {
  SWITCH_PAGE,
  FETCH_PRODUCTS,
  SORT_PRODUCTS,
  FAVORITES_ADD,
  CART_ADD
} from '../utils/constants.js';

const initialState = {
  productsData: JSON.parse(window.localStorage.getItem(`productsData`)) || [],
  page: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_PAGE:
      return {
        ...state, page: action.payload
      };
    case FETCH_PRODUCTS:
      return {
        ...state, productsData: action.payload
      };
    case SORT_PRODUCTS:
      let sortedProducts;

      switch (action.payload) {
        case `priceIncrease`:
          sortedProducts = state.productsData.slice().sort((a, b) => a.price - b.price);
          break;
        case `priceDecrease`:
          sortedProducts = state.productsData.slice().sort((a, b) => b.price - a.price);
          break;
        case `productName`:
          sortedProducts = state.productsData.slice().sort((a, b) => {
            const firstCondition = a.name < b.name;
            const secondCondition = a.name > b.name ? 1 : 0;

            return firstCondition ? -1 : secondCondition;
          });
          break;
        default:
          sortedProducts = state.productsData.slice().sort((a, b) => a.id - b.id);
          break;
      }

      return {
        ...state, productsData: sortedProducts
      };
    case FAVORITES_ADD:
      const productsWithFavorites = state.productsData.slice();

      productsWithFavorites.forEach((item) => {
        if (item.id === action.payload) {
          item.favorites = !item.favorites;
        }
      });

      return {
        ...state, productsData: productsWithFavorites
      };
    case CART_ADD:
      const productsToCart = state.productsData.slice();

      productsToCart.forEach((item) => {
        if (item.id === action.payload) {
          item.cart = !item.cart;
        }
      });

      return {
        ...state, productsData: productsToCart
      };
    default:
      return state;
  }
};

export default reducer;
