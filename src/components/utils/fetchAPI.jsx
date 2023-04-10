const KEY = 'cd99a2449e6daaffb205ea92bac682a0';

export const fetchTrendingMovies = async () => {
  const link = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
  const request = await fetch(link)
    .then(res => res.json())
    .catch(error => console.log(error));

  return await request.results;
};

export const fetchWithQuery = async query => {
  const newQuery = query.split(' ').join('%20');
  const link = `https://api.themoviedb.org/3/search/company?api_key=${KEY}&query=${newQuery}&page=1`;
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
  console.log(request);
  return await request;
};

export const fetchMovieCredits = async id => {
  const link = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`;
  const request = await fetch(link).then(res => res.json());

  return await request;
};

export const fetchMovieReviews = async id => {
  const link = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  const request = await fetch(link)
    .then(res => res.json())
    .catch(error => console.log(error));

  return await request;
};
