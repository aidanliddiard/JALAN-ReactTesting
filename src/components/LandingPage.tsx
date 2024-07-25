import React, { useState, useEffect } from "react";
import ResultList from "./ResultList";
import { Film } from "../models/Film";
import { fetchFilms, filterByTitle } from "../services/getFilms";
import SearchFilm from "./SearchFilm";
import Loading from "./Loading";

const LandingPage: React.FC = () => {
    const [filmList, setFilmList] = useState<Film[] | null>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchFilmData = async () => {
        let resp;
        if (!search){
            resp = await fetchFilms();
            
        } else {
            resp = await filterByTitle(search);
        }
        setFilmList(resp);
        };
        fetchFilmData();
      }, [search])

      if (!filmList) {
        return <Loading size={65} speed={1.5} color="blue" />;
      }


    return(
        <>
            <SearchFilm setSearch = {setSearch}/>
            <ResultList films = {filmList}/>
        </>

    )
}

export default LandingPage;