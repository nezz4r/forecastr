import axios, { AxiosResponse } from 'axios';

export default async function fetch(url: `https://${string}`) {
  const res: AxiosResponse = await axios.get(url);
  return res;
}
