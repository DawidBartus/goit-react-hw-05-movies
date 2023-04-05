import { fetchTrendingMovies } from 'components/fetchAPI';
import { Link, useLocation } from 'react-router-dom';
import { React, useEffect, useState } from 'react';

export const TrendingMovies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const trendingMovies = async () => {
    try {
      const fetched = await fetchTrendingMovies();
      setMovies(fetched);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    trendingMovies();
  }, []);

  return (
    <>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </>
  );
};
