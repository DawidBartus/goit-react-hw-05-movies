const KEY = 'cd99a2449e6daaffb205ea92bac682a0';

export const fetchTrendingMovies = async () => {
  const link = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
  const request = await fetch(link)
    .then(res => res.json())
    .catch(error => console.log(error));

  return await request.results;
};

export const fetchWithQuery = async query => {
  const link = `https://api.themoviedb.org/3/search/company?api_key=${KEY}&query=${query}&page=1`;
  const request = await fetch(link)
    .then(res => res.json())
    .catch(error => console.log(error));

  return await request.results;
};

export const fetchWithMovieID = async id => {
  const link = `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}`;
  const request = await fetch(link)
    .then(res => res.json())
    .catch(error => console.log(error));

  return await request;
};