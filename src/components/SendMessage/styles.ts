import styled, { css } from "styled-components";

export const Container = styled.form`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const MessageInput = styled.textarea`
  ${({theme}) => css`
    width: 31rem;
    height: 12rem;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.semiBold};

    :focus {
      outline: none;
    }
  `}
`;