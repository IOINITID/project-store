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

export {
  onSwitchPageAction,
  onFetchProductsAction
};
