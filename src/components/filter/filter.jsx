import React, {useEffect, useState} from 'react';
import {v4} from 'uuid';
import './filter.scss';
import {connect} from 'react-redux';
import {onSortProductsAction} from '../../actions';
import PropTypes from 'prop-types';

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

const Filter = (props) => {
  const {onSortProducts} = props;

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterTitle, setFilterTitle] = useState(`По возрастанию цены`);

  const closeFilterList = () => {
    if (isFilterOpen) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener(`click`, closeFilterList);
    return () => document.removeEventListener(`click`, closeFilterList);
  }, [isFilterOpen]);

  return (
    <div className={`filter ${isFilterOpen && `filter--active`}`} onClick={() => setIsFilterOpen(true)}>
      <p className="filter__title">{filterTitle} <span className="filter__icon"></span></p>
      <ul className="filter__list">
        {
          filterTypes.map((item) => {
            return (
              <li key={v4()} className="filter__item" onClick={() => {
                setFilterTitle(item.title);
                return onSortProducts(item.type);
              }}>
                <a className="filter__link" href="#" data-type={item.type}>{item.title}</a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

Filter.propTypes = {
  onSortProducts: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSortProducts: (filerType) => dispatch(onSortProductsAction(filerType))
  };
};

export default connect(null, mapDispatchToProps)(Filter);
