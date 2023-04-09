// import { Container, Header, Logo, Link } from './SharedLayout';
import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';
import style from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={style.pageHolder}>
      <nav className={style.menuHolder}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
