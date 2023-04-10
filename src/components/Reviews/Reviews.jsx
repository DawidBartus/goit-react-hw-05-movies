import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../utils/fetchAPI';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import style from './Reviews.module.css';
import loader from '../utils/loader.module.css';

const Reviews = () => {
  const [movieRev, setRev] = useState([]);
  const { id } = useParams();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchRev = async () => {
      const details = await fetchMovieReviews(id);

      setRev(details);
      setloading(false);
    };
    fetchRev();
  }, [id]);

  const { results, total_results } = movieRev;
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
        <ul className={style.reviewsComList}>
          {total_results ? (
            results.map(rev => {
              return (
                <li key={nanoid()} className={style.reviewsComElem}>
                  <p className={style.reviewsAuthor}>{rev.author}</p>
                  <p>{rev.content}</p>
                </li>
              );
            })
          ) : (
            <p>
              There's no single review added to this movie. Feel free to add
              your.
            </p>
          )}
        </ul>
      )}
    </>
  );
};

export default Reviews;
