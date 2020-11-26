const getFilteredData = (data) => {
  let result = [];
  let parentItem = {};

  // Create parent data
  data.forEach((dataItem) => {
    if (dataItem.parent === 0) {
      parentItem = dataItem;
      parentItem.items = [];
      result.push(parentItem);
    }
  });

  // Create parent items data
  result.forEach((resultItem) => {
    data.forEach((item) => {
      if (resultItem.id === item.parent) {
        resultItem.items.push(item);
      }
    });
  });

  return result;
};

export {
  getFilteredData
};
