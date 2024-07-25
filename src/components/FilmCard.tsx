import { Film } from "../models/Film";

interface FilmDetailProps {
  film: Film;
}

const FilmCard: React.FC<FilmDetailProps> = ({ film }) => {
  return (
    <>
      <img src={film.image} width={250} alt="Film Image" />
      <h1>{film.title}</h1>
      <h3>{film.original_title}</h3>
      <h5>{film.description}</h5>
      <p>Release date: {film.release_date}</p>
      <p>Rotten Tomatoes Score: {film.rt_score}</p>
      <p>Director: {film.director}</p>
      <img src={film.movie_banner} height={250} alt="Film Image" />
    </>
  );
};

export default FilmCard;
