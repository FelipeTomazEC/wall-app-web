import styled, { css } from 'styled-components';
import { ToastContainer } from 'react-toastify';

export const Container = styled(ToastContainer)`
  ${({theme}) => css`
    .Toastify__toast,
    .Toastify__toast-body {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.white};
      background-color: ${theme.colors.black};
    }
  `}
`;
