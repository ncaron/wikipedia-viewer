import React from 'react';
import PropTypes from 'prop-types';

const Wiki = ({item}) => {
  return (
    <li className="wiki-item">
      <a href={ item.link } target="_blank">
        <h2>{ item.title }</h2>
        <p>{ item.description }</p>
      </a>
    </li>
  );
};

Wiki.propTypes = {
  item: PropTypes.object.isRequired
};

export default Wiki;
