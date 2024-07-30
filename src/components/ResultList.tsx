import React from "react";
import ResultItem from "./ResultItem";
import { Film } from "../models/Film";


interface ResultListProps {
    films: Film[]
}


const ResultList: React.FC<ResultListProps> = ({films}) => {
    return (
        films.length > 0 ? (
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
            ) : <p>No Results Found</p>

    );
};

export default ResultList;