import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({theme}) => `${theme.spacings.medium} 2rem`};
  width: 100%;
  height: 100%;
`;