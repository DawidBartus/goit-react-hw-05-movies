import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from './fetchAPI';
import { useEffect, useState } from 'react';

export const Reviews = () => {
  const [movieRev, setRev] = useState([]);
  const { id } = useParams();

  const fetchRev = async () => {
    const details = await fetchMovieReviews(id);

    setRev(details);
  };

  useEffect(() => {
    fetchRev();
  }, []);

  const { results, total_results } = movieRev;
  console.log(results);
  return (
    <div>
      {total_results ? (
        results.map((rev, index) => {
          return (
            <>
              {' '}
              <p key={index}>{rev.author}</p>
              <p>{rev.content}</p>
            </>
          );
        })
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};
