import styled from 'styled-components';
import { ButtonProps, InputProps, DivProps } from 'react-html-props';

export const Wrapper = styled.div<DivProps>`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const InputWrapper = styled.div<DivProps>`
  position: relative;
  width: 30%;

  &:focus-within {
    & input {
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    }
    & ul {
      display: block;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}) {
    width: 50%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    width: 100%;
  }
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid transparent;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  background-color: ${({ theme }) => theme.colors.light};
  padding: 10px;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ theme, color }) => color || theme.colors.primary};
  border: none;
  height: 40px;
  min-width: 40px;
  padding: 2px;
  font-size: 20px;
  border-radius: 4px;

  &:active {
    background-color: ${({ theme, color }) => color || theme.colors.secondary};
  }
`;
