import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semiBold};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    font-family: ${theme.font.family};
    width: 31rem;
    height: 5rem;
    border-radius: ${theme.border.radius};
    border: none;
    text-align: center;
    margin-top: 0.5rem;
    display: block;
    :focus {
      outline: none;
    }
  `}
`;
