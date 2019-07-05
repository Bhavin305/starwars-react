import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';
import { usePlanetSearch } from '../effects';

const Search = ({ onSelect, placeholder, debounce }) => {
  const [{ results, isLoading }, searchPlanets] = usePlanetSearch();
  return (
    <>
      <div className="search-box">
        <SearchInput
          placeholder={placeholder}
          debounce={debounce}
          onChange={searchPlanets}
        />
      </div>
      <SearchResults
        results={results}
        isLoading={isLoading}
        onSelect={onSelect}
      />
    </>
  );
}

Search.propTypes = {
  debounce: PropTypes.number,
  onSelect: PropTypes.func,
  placeholder: PropTypes.string,
}

Search.defaultProps = {
  placeholder: 'Search',
  debounce: 300,
}

export default Search;
