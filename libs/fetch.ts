import axios, { AxiosResponse } from 'axios';

export async function fetch(url: string) {
  const res: AxiosResponse = await axios.get(url);
  return res.data;
}

export async function fetchCitiesList(searchString: string) {
  function extractIDFromURL(url) {
    const id = url
      .replace('https://api.teleport.org/api/cities/geonameid:', '')
      .replace('/', '');

    return id;
  }

  const encodedSearchString = encodeURIComponent(searchString);
  let mappedList = [];
  try {
    const url = `https://api.teleport.org/api/cities/?search=${encodedSearchString}`;
    const list = await fetch(url);
    mappedList = list._embedded['city:search-results'].map((city) => {
      const id = extractIDFromURL(city._links['city:item'].href);
      return { name: city.matching_full_name, id };
    });
  } catch (err) {
    console.error(err);
  }
  return mappedList;
}

export async function fetchWeatherData(cityID: string) {
  let data = {};
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    data = await fetch(url);
  } catch (err) {
    console.error(err);
  }
  return data;
}

export async function fetchWeatherDataFromCoords(lat: number, lon: number) {
  let data = {};

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    data = await fetch(url);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
  return data;
}
