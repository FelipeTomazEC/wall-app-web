import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Loading } from '../../components/Loading';
import { PostsList } from '../../components/PostsList';
import { SendMessage } from '../../components/SendMessage';
import { useAuth } from '../../contexts/Auth';
import * as S from './styles';

export const Wall: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        <PostsList />

        {!isAuthenticated && (
          <S.LoginMessage>
            Wanna post a message?
            <Link to="/login">Log in</Link>
          </S.LoginMessage>
        )}

        {isAuthenticated && <SendMessage/>}
      </Suspense>
    </Layout>
  );
}
