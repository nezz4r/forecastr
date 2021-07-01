import axios, { AxiosResponse } from 'axios';

export async function fetch(url: string) {
  const res: AxiosResponse = await axios.get(url);
  return res.data;
}

export async function fetchCitiesList(searchString: string) {
  const encodedSearchString = encodeURIComponent(searchString);
  const url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/queryautocomplete/json?key=${process.env.NEXT_PUBLIC_PLACES_API_KEY}&input=${encodedSearchString}`;
  const list = await fetch(url);
  return list;
}
