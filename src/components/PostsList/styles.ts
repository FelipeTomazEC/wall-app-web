import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: ${({ theme }) => theme.spacings.xxsmall};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  overflow-y: auto;
  
  li {
    list-style: none;
  }
`;
