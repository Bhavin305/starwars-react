const peopleURL = 'https://swapi.co/api/people';

export const login = async (username, password) => {
  const res = await fetch(`${peopleURL}/?search=${username}`)
  const { results = [] } = await res.json();
  let result = false;

  results.map(char => {
    if(char.name === username && char.birth_year === password.replace(/\s/g,'')) {
        result = true;
    }
    return char;
  });
  return result;
}

export const logout = () => {
    localStorage.clear();
}

