import React from 'react';
import './quantity.scss';

const Quantity = (props) => {
  const {quantity} = props;

  let quantityItems;
  let quantityTitle;

  switch (true) {
    case quantity < 50:
      quantityItems = [1];
      quantityTitle = `Мало`;
      break;
    case quantity > 50 && quantity < 100:
      quantityItems = [1, 2];
      quantityTitle = `Средне`;
      break;
    case quantity > 100:
      quantityItems = [1, 2, 3];
      quantityTitle = `Много`;
      break;
    default:
      break;
  }

  return (
    <div className="quantity">
      <span className="quantity__title">{quantityTitle}</span>
      <ul className="quantity__list">
        {
          quantityItems &&
          quantityItems.map((item) => {
            return <li key={item} className="quantity__item"></li>;
          })
        }
      </ul>
    </div>
  );
};

export default Quantity;
