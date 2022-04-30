import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.strong`
  ${({theme}) => css`
      color: ${theme.colors.primary};
      text-transform: uppercase;
      font-size: ${theme.font.sizes.xxlarge};
      font-weight: ${theme.font.bold};
      text-align: center;
  `}
`;

export const Details = styled.p`
  ${({theme}) => css`
      color: ${theme.colors.white};
      text-transform: uppercase;
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
  `}
`;

export const AnimationWrapper = styled.div`
`;