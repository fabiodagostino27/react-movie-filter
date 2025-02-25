import { Movie } from "./Movie";
import { useState, useEffect } from "react";

export const Main = (props) => {
    const movies = props.movies;

    const [moviesList, setMoviesList] = useState(movies);

    const [search, setSearch] = useState("");

    return (
        <main className="container">
            <h2>Lista Film:</h2>

            <label htmlFor="genre">Genere: </label>
            <select name="genre" id="genre" onChange={(e) => setSearch(e.target.value)}>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>
            <ul>
                {
                    moviesList.map((element, index) => <Movie key={index} movie={element} />)
                }
            </ul>
        </main>
    )
}