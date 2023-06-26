import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import AppBar from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <container>
      <AppBar />
      <main>
        <Suspense fallback={Loader}>
          <Outlet />
        </Suspense>
      </main>
    </container>
  );
};
