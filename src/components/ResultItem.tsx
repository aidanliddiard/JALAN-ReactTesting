import { Film } from "./ResultList";

const ResultItem: React.FC<Film> = ({id, title, release_date}) => {
    return(
        <tr key={id}>
        <td>{title}</td>
        <td>{release_date}</td>
    </tr>
    )
}

export default ResultItem;