import React from "react";
import ResultItem from "./ResultItem";
import { Film } from "../models/Film";


interface ResultListProps {
    films: Film[]
}


const ResultList: React.FC<ResultListProps> = ({films}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {films.map((film) => (
                    <ResultItem key={film.id} id = {film.id} title={film.title} release_date={film.release_date}/>
                ))}
            </tbody>
        </table>
    );
};

export default ResultList;