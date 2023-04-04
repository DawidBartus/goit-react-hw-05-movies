import { Outlet, Link, useLocation } from 'react-router-dom';
export const FoundMovies = props => {
  const location = useLocation();
  const { query } = props;

  return (
    <ul>
      {query.map(film => {
        return (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
