import { FoundMovies } from 'components/FoundMovies/FoundMovies';
import { fetchWithQuery } from 'components/utils/fetchAPI';
import { useEffect, useRef, useState } from 'react';
import style from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const inputRef = useRef(null);
  const [film, setFilm] = useState([]);
  const [foundMovie, setfoundMovie] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const actualQuery = searchParams.get('query');

  const handleChange = e => {
    e.preventDefault();
    const params = inputRef.current.value;
    setSearchParams({ query: params });
  };

  useEffect(() => {
    if (actualQuery) {
      const fetchQueryFilms = async props => {
        const response = await fetchWithQuery(props);
        setFilm(response);

        if (response.length === 0) {
          setfoundMovie(true);
        } else {
          setfoundMovie(false);
        }
      };
      fetchQueryFilms(actualQuery);
    }
  }, [actualQuery]);

  return (
    <div className={style.trendingArea}>
      <form action="submit">
        <input
          ref={inputRef}
          type="text"
          id="query"
          name="query"
          className={style.formInput}
        />
        <button type="submit" onClick={handleChange} className={style.formBttn}>
          Wyszukaj
        </button>
      </form>
      {film.length > 0 ? <FoundMovies query={film} /> : <p>Try me</p>}
      {foundMovie ? <p>Movie not found</p> : null}
    </div>
  );
};

export default Movies;
