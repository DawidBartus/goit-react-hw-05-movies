import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../fetchAPI';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import style from './Cast.module.css';

const Cast = () => {
  const [movieCast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchMovieCredits(id);

      setCast(details);
    };
    fetchDetails();
  }, [id]);

  const { cast } = movieCast;

  return (
    <>
      {cast ? (
        <ul className={style.castList}>
          {cast.map(actor => {
            return (
              <li key={nanoid()}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                      : `https://upload.wikimedia.org/wikipedia/commons/a/ad/Placeholder_no_text.svg`
                  }
                  alt={`${actor.name}`}
                  width={150}
                  height={225}
                />
                <p>Name: {actor.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          Our trolls didn't add actors from this movie. They'll be working on it
          soon.
        </p>
      )}
    </>
  );
};

export default Cast;
