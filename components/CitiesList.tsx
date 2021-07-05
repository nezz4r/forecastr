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
  if (cities.length > 0) {
    return (
      <List>
        {cities.map((city, index) => (
          <ListItem
            tabIndex={0}
            onClick={(e) => handleClick(e, index)}
            key={city.id}
          >
            {city.name}
          </ListItem>
        ))}
      </List>
    );
  }
  return null;
}
