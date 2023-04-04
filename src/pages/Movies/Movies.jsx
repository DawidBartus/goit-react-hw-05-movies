import { FoundMovies } from 'components/FoundMovies';
import { fetchWithQuery } from 'components/fetchAPI';
import { useEffect, useRef, useState } from 'react';

const Movies = () => {
  const inputRef = useRef(null);
  const [film, setFilm] = useState([]);

  const handleClick = async e => {
    e.preventDefault();
    const queery = inputRef.current.value;
    const response = await fetchWithQuery(queery);
    console.log(response);
    setFilm(response);
  };

  useEffect(() => {}, [film]);

  return (
    <div>
      <form action="">
        <input ref={inputRef} type="text" id="queery" name="queery" />
        <button type="submit" onClick={handleClick}>
          Wyszukaj
        </button>
      </form>
      {film.length > 0 ? <FoundMovies query={film} /> : <p>Try me</p>}
    </div>
  );
};

export default Movies;
