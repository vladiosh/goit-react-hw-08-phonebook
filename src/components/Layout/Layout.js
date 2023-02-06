import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppHead } from '../AppHead/AppHead';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px',
      }}
    >
      <AppHead />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
