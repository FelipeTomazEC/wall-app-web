import styled, { css } from 'styled-components';

const getRandomColor = () => {
  const possibleColors = ['#E08700', '#93622A', '#A85010', '#8A8888'];
  const index = Math.floor(Math.random() * possibleColors.length);
  return possibleColors.at(index);
}

export const Container = styled.div`
  ${({theme}) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
    width: 15rem;
    height: 100%;
    background-color: ${getRandomColor()};
    gap: ${theme.spacings.small};
  `}
`;

export const Text = styled.q`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    font-style: italic;
  `}
`;

export const Author = styled.span`
  ${({theme}) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.semiBold};
    align-self: flex-end;
    position: relative;

    ::before {
      content: ' ';
      bottom: 0;
      transform: translateY(-150%);
      left: -1.8rem;
      position: absolute;
      width: 1.2rem;
      height: .3rem;
      background-color: ${theme.colors.white};
      border-radius: ${theme.border.radius};
    }
  `}
`;
