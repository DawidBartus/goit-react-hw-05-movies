import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import { fetchWithMovieID } from './fetchAPI';
import { useEffect, useState } from 'react';

export const MoviesDetails = () => {
  const [movieDetails, setDetails] = useState([]);

  const { id } = useParams();
  // const location = useLocation();

  const fetchDetails = async () => {
    const details = await fetchWithMovieID(id);

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const { title, overview, genres } = movieDetails;

  return (
    <>
      {title ? (
        <div>
          <p>{title}</p>
          <p>{overview}</p>
          {genres.map(gen => {
            return <p key={gen.id}>{gen.name}</p>;
          })}
          <p>
            <Link to="cast">Cast</Link>
            <Link to="revievs">Revievs</Link>
          </p>
          <Outlet />
        </div>
      ) : null}
    </>
  );
};
