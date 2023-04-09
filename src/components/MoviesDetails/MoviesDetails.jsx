import { useParams, Outlet, Link } from 'react-router-dom';
import { fetchWithMovieID } from '../fetchAPI';
import { Suspense, useEffect, useState } from 'react';
import style from './MoviesDetails.module.css';

export const MoviesDetails = () => {
  const [movieDetails, setDetails] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchWithMovieID(id);
        setDetails(details);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [id]);

  const { title, overview, genres } = movieDetails;

  return (
    <>
      {title ? (
        <div className={style.filmHolder}>
          <p className={style.movieTitle}>{title}</p>
          <p className={style.movieOverview}>{overview}</p>
          <ul className={style.genresList}>
            {genres.map(gen => {
              return (
                <li key={gen.id} className={style.genresListElem}>
                  {gen.name}
                </li>
              );
            })}
          </ul>
          <p className={style.linkHolder}>
            <Link to="cast">Cast</Link>
            <Link to="revievs">Revievs</Link>
          </p>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </div>
      ) : (
        <div>
          <p>
            Sorry there is problem with our server. Please try again in a
            minute.
          </p>
        </div>
      )}
    </>
  );
};
