import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from './fetchAPI';
import { useEffect, useState } from 'react';

export const Cast = () => {
  const [movieCast, setCast] = useState([]);
  const { id } = useParams();

  const fetchDetails = async () => {
    const details = await fetchMovieCredits(id);

    setCast(details);
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  const { cast } = movieCast;
  console.log(cast);

  return (
    <>
      {cast ? (
        <ul>
          {cast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg`
                  }
                  alt={`${actor.name} photo`}
                />
                <p>Name: {actor.name}</p>
              </li>
            );
          })}
          <p>czesc</p>
        </ul>
      ) : null}
    </>
  );
};
