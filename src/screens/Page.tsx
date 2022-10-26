import { useEffect, useState } from "react";

import { Content, SideBar } from "../components/";

import { api } from "../services/api";
import { TGenreResponseProps, TMovieProps } from "../utils/types";

import "../styles/global.scss";

export function Page() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<TGenreResponseProps[]>([]);

  const [movies, setMovies] = useState<TMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<TGenreResponseProps>(
    {} as TGenreResponseProps
  );

  useEffect(() => {
    api
      .get<TGenreResponseProps[]>("genres")
      .then((response) => setGenres(response.data));
  }, []);

  useEffect(() => {
    api
      .get<TMovieProps[]>(`movies/?Genre_id=${selectedGenreId}`)
      .then((response) => setMovies(response.data));

    api
      .get<TGenreResponseProps>(`genres/${selectedGenreId}`)
      .then((response) => setSelectedGenre(response.data));
  }, [selectedGenreId]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        setSelectedGenreId={setSelectedGenreId}
      />

      <Content movies={movies} selectedGenre={selectedGenre} />
    </div>
  );
}
