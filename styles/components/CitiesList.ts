import styled from 'styled-components';
import { ULProps, LIProps } from 'react-html-props';

export const List = styled.ul<ULProps>`
  max-height: 200px;
  overflow: scroll;
  background-color: ${({ theme }) => theme.colors.light};
  position: absolute;
  border: 1px solid #d4d4d4;
  border-bottom: none;
  border-top: none;
  z-index: 99;
  top: 110%;
  left: 0;
  right: 0;
  display: none;
  border-radius: 4px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const ListItem = styled.li.attrs<LIProps>((props) => ({}))`
  color: ${({ theme }) => theme.colors.dark};
  padding: 10px;
  cursor: pointer;
  background-color: #fff;
  border-bottom: 1px solid #d4d4d4;

  &:hover {
    background-color: #e9e9e9;
  }
`;
