import styled from 'styled-components';

export const List = styled.ul``;

export const ListItem = styled.li.attrs((props) => ({
  selected: props.selected,
}))``;
