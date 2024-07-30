import { Film } from "../../models/Film";
import { render, screen } from "@testing-library/react";
import ResultList from "../ResultList";
import { BrowserRouter } from "react-router-dom";

describe('Result List Tests', () => {
    const films:Film[] = [
        {
            id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
            title: "Castle in the Sky",
            original_title: "天空の城ラピュタ",
            director: "Hayao Miyazaki",
            description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
            release_date: "1986",
            rt_score: "95",
            image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
            movie_banner: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg"
        },
        {
            id: "cd3d059c-09f4-4ff3-8d63-bc765a5184fa",
            title: "Howl's Moving Castle",
            original_title: "ハウルの動く城",
            director: "Hayao Miyazaki",
            description: "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking home.",
            release_date: "2004",
            rt_score: "87",
            image: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/TkTPELv4kC3u1lkloush8skOjE.jpg",
            movie_banner: "https://image.tmdb.org/t/p/original/hjlvbMKhQm7N8tYynr8yQ8GBmqe.jpg"
        }
    ]
    test('should render the correct number of ResultItem components', () => {
            render(
                <BrowserRouter>
                    <ResultList films={films} />
                </BrowserRouter>
            );

        const resultListItems = screen.getAllByRole('row');
        expect(resultListItems[1]).toHaveTextContent("Castle in the Sky");
        expect(resultListItems[1]).toHaveTextContent("1986");
        expect(resultListItems[2]).toHaveTextContent("Howl's Moving Castle");
        expect(resultListItems[2]).toHaveTextContent("2004");
        expect(resultListItems).toHaveLength(3);
    });
    test('should render an error message to the user when nothing found', () => {
        const emptyArr:Film[] = [];
        render(
            <BrowserRouter>
                <ResultList films={emptyArr} />
            </BrowserRouter>
        );
        const resultListItem = screen.getByText('No Results Found');
        expect(resultListItem).toBeInTheDocument()
    });
})