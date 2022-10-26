import { Dispatch, SetStateAction } from "react";

import { Button } from "./";
import { TGenreResponseProps } from "../utils/types";

import "../styles/sidebar.scss";

interface ISideBarProps {
  genres: TGenreResponseProps[];
  selectedGenreId: number;
  setSelectedGenreId: Dispatch<SetStateAction<number>>;
}

export function SideBar({
  genres,
  selectedGenreId,
  setSelectedGenreId,
}: ISideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
