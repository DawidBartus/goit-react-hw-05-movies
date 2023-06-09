import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import style from './Cast.module.css';
import loader from '../utils/loader.module.css';

const Cast = () => {
  const [movieCast, setCast] = useState([]);
  const [loading, setloading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await fetchMovieCredits(id);

      setCast(details);
      setloading(false);
    };
    fetchDetails();
  }, [id]);

  const { cast } = movieCast;

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
          {cast ? (
            <>
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
            </>
          ) : (
            <p>
              Our trolls didn't add actors from this movie. They'll be working
              on it soon.
            </p>
          )}
        </>
      )}
    </>
  );
};

export default Cast;
