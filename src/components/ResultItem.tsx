import { Link } from "react-router-dom";
import { Film } from "../models/Film";

type ResultItem = Pick<Film, "id" | "title" | "release_date">

const ResultItem: React.FC<ResultItem> = ({id, title, release_date}) => {
    return(
        <tr key={id}>
        <td>{title}</td>
        <td>{release_date}</td>
        <td>
            <Link to = {`/${id}`}>View Details</Link>
        </td>
    </tr>
    )
}

export default ResultItem;