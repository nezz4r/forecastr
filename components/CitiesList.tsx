import { FunctionComponent } from 'react';
import { List, ListItem } from '@styles/components/CitiesList';

interface CitiesListProps {
  items: string[];
}

export const CitiesList: FunctionComponent<CitiesListProps> = ({ items }) => (
  <List>
    {items.map((item) => (
      <ListItem key={item}>{item}</ListItem>
    ))}
  </List>
);
