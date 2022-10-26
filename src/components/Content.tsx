import { MovieCard } from "./";
import { TGenreResponseProps, TMovieProps } from "../utils/types";

import "../styles/content.scss";

interface IContentProps {
  movies: TMovieProps[];
  selectedGenre: TGenreResponseProps;
}

export function Content({ movies, selectedGenre }: IContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
