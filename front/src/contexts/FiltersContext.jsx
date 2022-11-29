import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

const FiltersContext = React.createContext({
  handleFilter: () => {},
  filtersSelect: [],
});
export default FiltersContext;

export function FiltersContextProvider({ children }) {
  const [filtersSelect, setFilters] = useState([]);

  const handleFilter = (Filter) => {
    setFilters(Filter);
  };

  const memoizedValue = useMemo(() => ({
    filtersSelect,
    handleFilter,
  }), [filtersSelect]);

  return (
    <FiltersContext.Provider value={memoizedValue}>
      {children}
    </FiltersContext.Provider>
  );
}

FiltersContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
