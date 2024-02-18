import { GlobalStyle } from 'components/GlobalStyle';
import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Header,
  HeaderItem,
  HeaderLink,
  HeaderList,
  Nav,
} from './AppLayout.styled';
import { Toaster } from 'react-hot-toast';

export const AppLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <HeaderLink to="/">Logo.</HeaderLink>
          <HeaderList>
            <HeaderItem>
              <HeaderLink to="/">Home</HeaderLink>
            </HeaderItem>
            <HeaderItem>
              <HeaderLink to="articles">Articles</HeaderLink>
            </HeaderItem>
          </HeaderList>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Toaster />
      <GlobalStyle />
    </>
  );
};
