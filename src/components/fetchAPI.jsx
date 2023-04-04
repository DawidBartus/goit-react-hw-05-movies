import axios from 'axios';

const KEY = 'cd99a2449e6daaffb205ea92bac682a0';

export const fetchTrendingMovies = async () => {
  const link = `https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`;
  const request = await fetch(link).then(res => res.json());

  return await request.results;
};
