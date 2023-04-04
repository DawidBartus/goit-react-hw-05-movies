import { TrendingMovies } from 'components/TrendingMovies';
import { React } from 'react';

const Home = () => {
  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <p>Feel free to discaver today's trending movies!</p>
      </div>
      <div>
        <h2>Trending</h2>
        <ul>
          <TrendingMovies></TrendingMovies>
        </ul>
      </div>
    </>
  );
};

export default Home;
