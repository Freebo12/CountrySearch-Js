function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1';
  const properties = ['name', 'capital', 'population', 'flags', 'languages'];
  return fetch(`${BASE_URL}/name/${name}?fields=${properties.join(',')}`).then(
    resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    }
  );
}
export { fetchCountries };
