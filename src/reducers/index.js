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
    default:
      return state;
  }
};

export default reducer;
