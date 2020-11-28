const onSwitchPageAction = (page) => {
  return {
    type: `SWITCH_PAGE`,
    payload: page
  };
};

const onFetchProductsAction = (products) => {
  return {
    type: `FETCH_PRODUCTS`,
    payload: products
  };
};

const onSortProductsByPriceIncreaseAction = (filterType) => {
  return {
    type: `SORT_PRODUCTS_BY_PRICE_INCREASE`,
    payload: filterType
  };
};

export {
  onSwitchPageAction,
  onFetchProductsAction,
  onSortProductsByPriceIncreaseAction
};
