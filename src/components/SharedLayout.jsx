// import { Container, Header, Logo, Link } from './SharedLayout';
import { Outlet, Link } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Outlet />
    </div>
  );
};
