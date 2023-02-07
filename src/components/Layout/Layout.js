import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppHead } from '../AppHead/AppHead';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppHead />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
