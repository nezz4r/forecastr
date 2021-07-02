import styled from 'styled-components';
import { ULProps, LIProps } from 'react-html-props';

export const List = styled.ul<ULProps>``;

export const ListItem = styled.li.attrs<LIProps>((props) => ({}))``;
