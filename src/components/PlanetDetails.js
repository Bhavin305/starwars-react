import React from 'react';
import PropTypes from 'prop-types';

const PlanetDetails = ({ planet, onClose }) => (
  <section className="search-details">
    <h2>{planet.name}</h2>
    <div className="search-items">
      <p>
        <span>Climate:</span> {planet.climate}
      </p>
      <p>
      <span>Diameter:</span> {planet.diameter}
      </p>
      <p>
        <span>Gravity:</span> {planet.gravity}
      </p>
      <p>
        <span>Population:</span> {planet.population}</p>
      <p>
        <span>Terrain:</span> {planet.terrain}
      </p>
    </div>
    <button onClick={onClose}>
      close
    </button>
  </section>
)

PlanetDetails.propTypes = {
  planet: PropTypes.object,
  onClose: PropTypes.func,
}

export default PlanetDetails
