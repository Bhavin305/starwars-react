import React from 'react';
import PropTypes from 'prop-types';

function SearchInput({ debounce, onChange }) {
  let debounceTimeout = null;

  function debounceInput({ target }) {
    clearTimeout(debounceTimeout)

    debounceTimeout = setTimeout(() => {
      onChange(target.value)
    }, debounce)
  }

  return (
    <input
      type="text"
      onInput={debounceInput}
      placeholder="Search StarWars Planets..."
    />
  )
}

SearchInput.propTypes = {
  debounce: PropTypes.number,
  onChange: PropTypes.func,
}

export default SearchInput
