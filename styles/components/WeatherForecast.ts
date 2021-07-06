import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ColumnDiv = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    margin: 10px 0;
  }
`;

export const RowDiv = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    margin: 10px 5px;
  }
`;

export const Span = styled.span`
  margin: 10px;
`;

export const MainTitle = styled.h2`
  font-size: 30px;
  margin: 20px 0;
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  margin: 20px 0 20px;
`;
