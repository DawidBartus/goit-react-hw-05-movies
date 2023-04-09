import { TrendingMovies } from 'components/TrendingMovies';
import { React } from 'react';
import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <div className={style.welcomePage}>
        <h1>Welcome!</h1>
        <p>Feel free to discaver today's trending movies!</p>

        <h2>Trending</h2>
        <ul className={style.trendingMoviesList}>
          <TrendingMovies></TrendingMovies>
        </ul>
      </div>
    </>
  );
};

export default Home;
