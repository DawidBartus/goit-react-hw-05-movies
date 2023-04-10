import { Link, useLocation } from 'react-router-dom';
import style from './FoundMovies.module.css';

export const FoundMovies = props => {
  const location = useLocation();
  const { query } = props;

  return (
    <ul className={style.foundMovieList}>
      {query.map(film => {
        return (
          <li key={film.id} className={style.foundMovieListElem}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
