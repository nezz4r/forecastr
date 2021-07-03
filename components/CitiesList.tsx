import { ULProps } from 'react-html-props';
import { Dispatch, SetStateAction } from 'react';
import { List, ListItem } from '@styles/components/CitiesList';
import { useCity } from '@contexts/CityContext';

interface CitiesListProps extends ULProps {
  items: [
    {
      name: string;
      id: string;
    }
  ];
  setValue: Dispatch<SetStateAction<string>>;
}

export function CitiesList({ items, setValue, ...props }: CitiesListProps) {
  const { setCity, citiesList } = useCity();

  function handleClick(e, index) {
    e.preventDefault();
    setCity(citiesList[index]);
    setValue('');
  }

  return (
    <List>
      {items.map((item, index) => (
        <ListItem onClick={(e) => handleClick(e, index)} key={item.id}>
          {item.name}
          {item.id}
        </ListItem>
      ))}
    </List>
  );
}
