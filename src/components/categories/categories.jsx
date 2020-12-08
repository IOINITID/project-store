import React, {useEffect, useState} from 'react';
import './categories.scss';
import ProjectService from '../../services/projectService.js';
import {getFilteredData} from '../../utils/common.js';

const projectService = new ProjectService();

const Categories = () => {
  const [sections, setSections] = useState([]);

  const getSections = async () => {
    const response = await projectService.getSections();

    setSections(getFilteredData(response));
  };

  useEffect(() => {
    getSections();
  }, []);

  return (
    <div className="categories">
      <h3 className="categories__title">Категории</h3>
      <ul className="categories__list">
        {
          sections &&
          sections.map((item) => {
            const {id, name, items} = item;
            return (
              <li key={id} className="categories__item">
                <a className={`categories__link ${items.length && `categories__link--special categories__link--active`}`} href="#">
                  {name}
                </a>
                {
                  items.length ?
                    <ul className="categories__list-additional">
                      {
                        items.map((it) => {
                          return (
                            <li key={it.id} className="categories__item-additional">
                              <a className="categories__link-additional" href="#">{it.name}</a>
                            </li>
                          );
                        })
                      }
                    </ul> : null
                }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Categories;
