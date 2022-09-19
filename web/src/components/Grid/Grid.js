import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  column-gap: ${props => props.colGutter ? props.colGutter : 0 };
  row-gap: ${props => props.rowGutter ? props.rowGutter : 0 };
  padding: 0 ${props => props.colGutter ? props.colGutter : 0 };
`;

export const GridItem = styled.div`
  grid-column: ${props => props.start} / span ${props => props.span}
`;
