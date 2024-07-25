import { useEffect, useState } from "react";
import FilmCard from "../FilmCard";
import { fetchFilmById } from "../../services/getFilms";
import { Film } from "../../models/Film";
import Loading from "../Loading";
import { useParams } from "react-router-dom";

export default function FilmDetail() {
  const { id } = useParams();

  const [film, setFilm] = useState<Film | null>();

  useEffect(() => {
    const fetchFilmData = async () => {
      if (!id) {
        setFilm(null);
      } else {
        const resp = await fetchFilmById(id);
        setFilm(resp);
      }
    };
    fetchFilmData();
  }, [id]);

  if (!film) {
    return <Loading size={65} speed={1.5} color="blue" />;
  }

  return <FilmCard film={film} />;
}
