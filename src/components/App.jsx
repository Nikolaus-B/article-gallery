import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';
import { lazy } from 'react';

const HomePage = lazy(() => import('pages/HomePage'));
const ArticlesPage = lazy(() => import('pages/ArticlesPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="articles" element={<ArticlesPage />} />
      </Route>
    </Routes>
  );
};
