export const fetchFilms = async () => {
  const films = await fetch(`https://ghibli-api.vercel.app/api/films`);
  const response = await films.json();
  return response.data;

}
export const fetchFilmById = async (id:string) => {
  const film = await fetch(`https://ghibli-api.vercel.app/api/films/${id}`);
  const response = await film.json();
  return response.data;
}

export const filterByTitle = async (query:string) => {
  const allFilms = await fetchFilms();
  const filteredFilms = allFilms.filter((film: {title:string}) => 
    film.title.toLowerCase().includes(query.toLowerCase().trim())
  )
  return filteredFilms;
}