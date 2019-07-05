import React from 'react';
import Search from './Search';
import { usePlanetDetails, useAuthenticate } from '../effects';
import PlanetDetails from '../components/PlanetDetails';

const Starwars = () => {
  const [planet, getPlanet] = usePlanetDetails();
  const { logout } = useAuthenticate();

  function clearPlanet() {
    getPlanet(null);
  }

  return (
    <div className="search-page">
      <header>
        <div className="page-head">
          <div>STARWARS</div>
          <div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </header>
      {planet ? <PlanetDetails planet={planet} onClose={clearPlanet} /> : <Search onSelect={getPlanet} />}
    </div>
  );
};

export default Starwars;
