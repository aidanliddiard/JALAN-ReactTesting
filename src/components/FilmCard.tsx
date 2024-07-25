import { Film } from "../models/Film";

interface FilmDetailProps {
   film: Film
}

const FilmCard: React.FC<FilmDetailProps> = ({film}) => {
    return(
        <>
            <h1>{film.title}</h1>
            <h3>{film.original_title}</h3>
            <h5>{film.description}</h5>
            <img src={film.image} alt="Film Image" />
        </>
    )

}

export default FilmCard;