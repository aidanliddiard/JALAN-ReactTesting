import React, { useState, useEffect } from "react";
import ResultList, { Film } from "./ResultList";
import { fetchFilms, filterByTitle } from "../services/getFilms";

const LandingPage: React.FC = () => {
    const [filmList, setFilmList] = useState<Film[]>([]);

    useEffect(() => {
        const fetchFilmData = async () => {
          const resp = await fetchFilms();
          setFilmList(resp);
        };
        fetchFilmData();
      }, [])


    return(
    <ResultList films = {filmList}/>
    )
}

export default LandingPage;