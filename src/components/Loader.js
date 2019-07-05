import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ isLoading, children }) =>
  isLoading ? (
    <>
      Loading...
    </>
  ) : (
    children
  )

Loader.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node
}

export default Loader;
