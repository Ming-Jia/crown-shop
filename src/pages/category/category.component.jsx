import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

import './category.styles.scss';

const CategoryPage = ({ match }) => {
  console.log(match);
  return (
    <div className="category">
      <h2>CATEOGRY PAGE</h2>
    </div>
  );
};

export default CategoryPage;
