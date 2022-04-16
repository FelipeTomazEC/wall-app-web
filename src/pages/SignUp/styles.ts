import styled, { css } from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings.xsmall};
  margin-top: ${({theme}) => theme.spacings.xxhuge};
`;

export const InputsContainer = styled(ButtonsContainer)`
  gap: ${({theme}) => theme.spacings.small};
`;

export const HaveAnAccount = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.semiBold};

    a:link, a:visited, a:hover, a:active {
      font-size: inherit;
      font-weight: ${theme.font.semiBold};
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`;