import axios, { AxiosResponse } from 'axios';

export async function fetch(url: string) {
  const res: AxiosResponse = await axios.get(url);
  return res.data;
}

export async function fetchCitiesList(searchString: string) {
  const encodedSearchString = encodeURIComponent(searchString);
  try {
    const url = `https://api.teleport.org/api/cities/?search=${encodedSearchString}`;
    const list = await fetch(url);
    console.log(list);
    return list._embedded['city:search-results'];
  } catch (err) {
    console.error(err);
  }
}

export async function fetchWeatherData(city) {
  const encodedCity = encodeURIComponent(city);
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`;
    const data = await fetch(url);
    return data;
  } catch (err) {
    console.error(err);
  }
}
