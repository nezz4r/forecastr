import { Dispatch, SetStateAction } from 'react';
import { List, ListItem } from '@styles/components/CitiesList';
import { useCity } from '@contexts/CityContext';

interface CitiesListProps {
  cities: [
    {
      name: string;
      id: string;
    }
  ];
  setValue: Dispatch<SetStateAction<string>>;
}

export function CitiesList({ cities, setValue }: CitiesListProps) {
  const { setCity, citiesList } = useCity();

  function handleClick(e, index) {
    e.preventDefault();
    setCity(citiesList[index]);
    setValue('');
  }

  return (
    <List>
      {cities.map((city, index) => (
        <ListItem onClick={(e) => handleClick(e, index)} key={city.id}>
          {city.name}
          {city.id}
        </ListItem>
      ))}
    </List>
  );
}
