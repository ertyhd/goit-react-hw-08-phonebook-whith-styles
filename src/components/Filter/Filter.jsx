import React from 'react';
import PropTypes from 'prop-types';

import style from './filter.module.scss';

const Filter = ({ handleChange, value }) => {
  return (
    <label className={style.filterLabel}>
      Find contacts
      <input
        value={value}
        name="filter"
        onChange={handleChange}
        className={style.filterInput}
        type="text"
        placeholder="input name or number"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
