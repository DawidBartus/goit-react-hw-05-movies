import { fetchTrendingMovies } from 'components/fetchAPI';
import { React, useEffect, useState } from 'react';

const Home = () => {
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
      <div>
        <h1>Welcome!</h1>
        <p>Feel free to discaver today's trending movies!</p>
      </div>
      <div>
        <h2>Trending</h2>
        <ul>
          {movies.map(movie => {
            console.log(movie);
            return <li key={movie.id}>{movie.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
