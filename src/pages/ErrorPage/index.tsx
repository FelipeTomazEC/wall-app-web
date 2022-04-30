import React from 'react';
import { Button } from '../../components/Button';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Layout } from '../../components/Layout';
import * as S from './styles';

export const ErrorPage: React.FC = () => {
  const handleRefresh = () => window.location.reload();

  return (
    <Layout>
      <S.Container>
        <ErrorMessage />
        <Button text='Refresh' onClick={handleRefresh} />
      </S.Container>
    </Layout>
  );
}
