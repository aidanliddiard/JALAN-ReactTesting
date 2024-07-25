import React, { useState, useEffect } from "react";
import { fetchFilms } from "../services/getFilms";
import ResultItem from "./ResultItem";

export interface Film {
    id: string;
    title: string;
    release_date: number;
}

export interface ResultListProps {
    films: Film[]
}

const ResultList: React.FC<ResultListProps> = ({films}) => {

    
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {films.map((film) => (
                    <ResultItem id={film.id} title={film.title} release_date={film.release_date}/>
                ))}
            </tbody>
        </table>
    );
};

export default ResultList;