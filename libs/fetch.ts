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
    // eslint-disable-next-line
    console.error(err);
  }
  return mappedList;
}

export async function fetchWeatherData(
  localizer: string | [number, number],
  isMetric: boolean
) {
  let formattedData = {};
  let url = '';
  const unit = isMetric ? 'metric' : 'imperial';

  try {
    if (typeof localizer === 'string') {
      url = `https://api.openweathermap.org/data/2.5/weather?id=${localizer}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=${unit}`;
    } else if (localizer instanceof Array) {
      const [lat, lon] = localizer;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=${unit}`;
    }
    const data = await fetch(url);

    formattedData = {
      city: data.name,
      country: data.sys.country,
      weather: data.weather[0],
      main: data.main
    };
    console.log(formattedData);
  } catch (err) {
    // eslint-disable-next-line
    console.error(err);
  }

  return formattedData;
}
