const url = 'https://swapi.co/api/planets';

export const search = async q => {
  const res = await fetch(`${url}/?search=${q}`);
  const { results = [] } = await res.json();

  return results.map(char => ({
    ...char,
    id: char.url.slice(0, -1).split('/planets/')[1]
  }))
}

export const getDetails = async id => {
  const res = await fetch(`${url}/${id}`);
  return res.json();
}


