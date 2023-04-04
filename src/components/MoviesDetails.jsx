import { useParams, useLocation } from 'react-router-dom';
import { fetchWithMovieID } from './fetchAPI';
import { useEffect, useState } from 'react';

export const MoviesDetails = () => {
  const [movieDetails, setDetails] = useState([]);

  const { id } = useParams();
  const location = useLocation();

  const fetchDetails = async () => {
    const details = await fetchWithMovieID(id);

    setDetails(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <>
      {movieDetails.title ? (
        <div>
          <p>{movieDetails.title}</p>
          <p>{movieDetails.overview}</p>
          {movieDetails.genres.map(gen => {
            return <p key={gen.id}>{gen.name}</p>;
          })}
        </div>
      ) : null}
    </>
  );
};
