import { render, screen } from "@testing-library/react";
import { Film } from "../../models/Film";
import { BrowserRouter } from "react-router-dom";
import FilmCard from "../FilmCard";

describe("Film card tests", () => {
  const film: Film = {
    id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
    title: "Castle in the Sky",
    original_title: "天空の城ラピュタ",
    director: "Hayao Miyazaki",
    description:
      "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
    release_date: "1986",
    rt_score: "95",
    image:
      "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg",
    movie_banner:
      "https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
  };


  it("should display details on page", () => {
    render(
      <BrowserRouter>
        <FilmCard film={film} />
      </BrowserRouter>
    );

    const title = screen.getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent("Castle in the Sky");

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBe(3);

    const img = screen.getAllByRole("img");
    expect(img.length).toBe(2);
  });

});
