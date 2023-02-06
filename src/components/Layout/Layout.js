import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppHead } from '../AppHead/AppHead';
import { Suspense } from 'react';
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <>
      <AppHead />
      <Container component="main">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    </>
  );
};
