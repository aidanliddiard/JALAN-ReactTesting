import React, { useState, useEffect } from "react";
import { fetchFilms } from "../services/getFilms";
import ResultItem from "./ResultItem";

export interface Film {
    id: string;
    title: string;
    release_date: number;
}


const ResultList: React.FC = () => {
    const [filmList, setFilmList] = useState<Film[]>([]);
    useEffect(() => {
        const fetchFilmData = async () => {
          const resp = await fetchFilms();
          setFilmList(resp);
        };
        fetchFilmData();
      }, [])
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {filmList.map((film) => (
                    <ResultItem id={film.id} title={film.title} release_date={film.release_date}/>
                ))}
            </tbody>
        </table>
    );
};

export default ResultList;