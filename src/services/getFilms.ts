export async function fetchFilms() {
  const films = await fetch(`https://ghibli-api.vercel.app/api/films`);
  const response = await films.json();
  return response.data;
}
