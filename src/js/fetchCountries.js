const BASE_URL = 'https://restcountries.com/v3.1/name/';

const searchParams = 'fields=name,capital,population,flags,languages';

export function fetchCountries(name) {
    return fetch(`${BASE_URL}${name}?${searchParams}`)
    .then((response) => {
        return response.json();
    })
    .then((country) => {
        console.log(country);
    })
    .catch(error => console.log(error));
}