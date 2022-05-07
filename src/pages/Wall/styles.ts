import styled, { css } from 'styled-components';

export const LoginMessage = styled.div`
  ${({theme}) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.semiBold};
    width: 100vw;
    height: 8rem;
    background-color: ${theme.colors.black};
    
    a:link, a:visited, a:hover, a:active {
      font-size: inherit;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.primary};
      text-decoration: none;
      margin-left: ${theme.spacings.xxxsmall};
    }
  `}
`;