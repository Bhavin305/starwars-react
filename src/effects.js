import { useState } from 'react';
import history from './services/history';
import { search, getDetails } from './services/planet';
import { login as loginService, logout as logoutService } from './services/login';

export function useAuthenticate() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  async function login(e) {
    e.preventDefault();
    if(await loginService(username, password)) {
      localStorage.setItem('session', Math.random()*1000);
      history.replace('/starwars');
    } else {
      setError(true);
    }
  }

  async function logout() {
    logoutService();
    history.replace('/');
  }

  function changeUsername(e) {
    setUsername(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  return {
    username, password, changeUsername, changePassword, login, logout, error
  };
}

export function usePlanetSearch() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  async function searchPlanets(term) {
    setIsLoading(true)
    const data = await search(term)
    setResults(data)
    setIsLoading(false)
  }

  return [{ results, isLoading }, searchPlanets]
}

export function usePlanetDetails() {
  const [planet, setPlanet] = useState(null);

  function getPlanet(id) {
    if (id === null) {
      setPlanet(null)
    } else {
      getDetails(id).then(setPlanet)
    }
  }

  return [planet, getPlanet]
}
