import { FoundMovies } from 'components/FoundMovies/FoundMovies';
import { fetchWithQuery } from 'components/utils/fetchAPI';
import { useRef, useState } from 'react';
import style from './Movies.module.css';

const Movies = () => {
  const inputRef = useRef(null);
  const [film, setFilm] = useState([]);

  const handleClick = async e => {
    e.preventDefault();
    const queery = inputRef.current.value;
    const response = await fetchWithQuery(queery);

    setFilm(response);
  };

  return (
    <div className={style.trendingArea}>
      <form action="submit">
        <input
          ref={inputRef}
          type="text"
          id="queery"
          name="queery"
          className={style.formInput}
        />
        <button type="submit" onClick={handleClick} className={style.formBttn}>
          Wyszukaj
        </button>
      </form>
      {film.length > 0 ? <FoundMovies query={film} /> : <p>Try me</p>}
    </div>
  );
};

export default Movies;
