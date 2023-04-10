import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { fetchWithMovieID } from '../utils/fetchAPI';
import { Suspense, useEffect, useState } from 'react';
import style from './MoviesDetails.module.css';
import loader from '../utils/loader.module.css';
import backLink from '../utils/backLink.module.css';

export const MoviesDetails = () => {
  const [movieDetails, setDetails] = useState([]);
  const [loading, setloading] = useState(true);
  const location = useLocation();
  const prevPage = location.state?.from ?? '/';

  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const details = await fetchWithMovieID(id);
        setDetails(details);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDetails();
  }, [id]);

  const { title, overview, genres } = movieDetails;

  return (
    <>
      {loading ? (
        <>
          <div className={loader.lds_ring}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </>
      ) : (
        <>
          {title ? (
            <div className={style.filmHolder}>
              <Link to={prevPage} className={backLink.back}>
                Back
              </Link>
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
              <Suspense
                fallback={
                  <>
                    <div className={loader.lds_ring}>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </>
                }
              >
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
      )}
    </>
  );
};
