import styled, { css } from 'styled-components';

type Props = {
  isOutlined: boolean;
}

export const Container = styled.button<Props>`
  ${({ theme, isOutlined }) => css`
    color: ${isOutlined ? theme.colors.primary : theme.colors.white };
    font-size: ${theme.font.sizes.xlarge};
    width: 31rem;
    height: 6rem;
    background-color: ${isOutlined ? theme.colors.white : theme.colors.primary};
    border-radius: ${theme.border.radius};
    font-weight: ${theme.font.bold};
    border-color: ${isOutlined ? theme.colors.primary : 'none' };
    border-style: ${isOutlined ? 'solid' : 'none' };

    :disabled {
      color: ${theme.colors.lightGray};
      background-color: ${theme.colors.darkGray};
    }
  `}
`;
