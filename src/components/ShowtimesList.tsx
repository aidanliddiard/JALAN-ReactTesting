import React, { useEffect } from "react";
import { Showtimes } from "../models/Showtimes";

const ShowtimesList: React.FC = () => {
    const [showtimes, setShowtimes] = React.useState<Showtimes[]>([]);

    useEffect(() => {
        const fetchShowtimes = async () => {
            const showtimes = await fetch(`http://localhost:5000/showtimes`);
            const response = await showtimes.json();
            console.log(response);
            setShowtimes(response);
        }
        fetchShowtimes();
    }, [])

    return (
        showtimes.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th>Movie</th>
                    <th>Theater</th>
                    <th>Showtime</th>
                </tr>
            </thead>
            <tbody>
                {showtimes.map((showtime) => (
                    <tr key={showtime.id}>
                        <td>{showtime.movie_name}</td>
                        <td>{showtime.theater_name}</td>
                        <td>{showtime.showtime}</td>
                    </tr>
                ))}
            </tbody>
        </table>
            ) : <p>No Showtimes Found</p>

    );
};

export default ShowtimesList;