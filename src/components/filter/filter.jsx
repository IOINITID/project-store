import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import './filter.scss';

const filterTypes = [
  {
    type: `priceIncrease`,
    title: `По возрастанию цены`
  },
  {
    type: `priceDecrease`,
    title: `По убыванию цены`
  },
  {
    type: `productName`,
    title: `По имени продукта`
  },
];

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const closeFilterList = (evt) => {
    const filterElement = document.querySelector(`.filter--active`);

    if (filterElement && !filterElement.contains(evt.target)) {
      setIsFilterOpen(!isFilterOpen);
    }
  };

  useEffect(() => {
    document.addEventListener(`click`, closeFilterList);
    return () => document.removeEventListener(`click`, closeFilterList);
  }, [isFilterOpen]);

  return (
    <div className={`filter ${isFilterOpen && `filter--active`}`} onClick={() => setIsFilterOpen(true)}>
      <p className="filter__title">
        По возрастанию цены <span className="filter__icon"></span>
      </p>
      <ul className="filter__list">
        {
          filterTypes.map((item) => {
            return (
              <li key={v4()} className="filter__item" onClick={() => console.log(item.type)}>
                <a className="filter__link" href="#" data-type={item.type}>{item.title}</a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Filter;
