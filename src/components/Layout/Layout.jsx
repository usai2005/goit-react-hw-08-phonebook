import { Outlet, NavLink, Link } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader';
import AppBar from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <div>
      {/* <header>
        <p>jhgfjhgmj,b,j</p>
        <nav>
          <Link to="/">Home</Link> */}

      <AppBar />
      {/* </nav>
      </header>
      <main> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* </main> */}
    </div>
  );
};
