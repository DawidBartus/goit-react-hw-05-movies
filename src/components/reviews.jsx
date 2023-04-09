import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from './fetchAPI';
import { useCallback, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const Reviews = () => {
  const [movieRev, setRev] = useState([]);
  const { id } = useParams();

  const fetchRev = useCallback(async () => {
    const details = await fetchMovieReviews(id);

    setRev(details);
  }, [id]);

  useEffect(() => {
    fetchRev();
  }, [fetchRev]);

  const { results, total_results } = movieRev;
  return (
    <div>
      {total_results ? (
        results.map(rev => {
          return (
            <div key={nanoid()}>
              <p>{rev.author}</p>
              <p>{rev.content}</p>
            </div>
          );
        })
      ) : (
        <p>
          There's no single review added to this movie. Feel free to add your.
        </p>
      )}
    </div>
  );
};

export default Reviews;
