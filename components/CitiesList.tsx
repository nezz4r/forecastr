import { FunctionComponent } from 'react';
import { List, ListItem } from '@styles/components/CitiesList';

interface CitiesListProps {
  items: [
    {
      name: string;
      id: string;
    }
  ];
}

export const CitiesList: FunctionComponent<CitiesListProps> = ({ items }) => (
  <List>
    {items.map((item) => (
      <ListItem key={item.id}>
        {item.name}
        {item.id}
      </ListItem>
    ))}
  </List>
);
