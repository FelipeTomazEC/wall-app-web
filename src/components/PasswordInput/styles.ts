import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.semiBold};
  `}
`;

export const Container = styled.div<{hasError: boolean}>`
  ${({theme, hasError}) => css`
    display: flex;
    width: 31rem;
    height: 5rem;
    margin-top: 0.5rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.white};
    align-items: center;
    padding-right: ${theme.spacings.xsmall};
    border-width: ${hasError ? '0.3rem' : '0'};
    border-style: ${hasError ? 'solid' : 'none'};
    border-color: ${theme.colors.red};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    background-color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.normal};
    font-family: ${theme.font.family};
    border: none;
    text-align: center;
    width: 100%;

    :focus {
      outline: none;
    }
  `}
`;

export const ErrorMessage = styled.span`
  ${({theme}) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;