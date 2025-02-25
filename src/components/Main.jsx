import { Movie } from "./Movie";
import { useState, useEffect } from "react";

export const Main = (props) => {
    const movies = props.movies;

    const [moviesList, setMoviesList] = useState(movies);

    const [search, setSearch] = useState("");
    const [filteredMovies, setFilteredMovies] = useState(movies);

    useEffect(() => {
        (search) ? setFilteredMovies(movies.filter(element => element.genre === search)) : setFilteredMovies(movies)
    }, [search])

    return (
        <main className="container">
            <h2>Lista Film:</h2>

            <label htmlFor="genre">Filtra per genere: </label>
            <select name="genre" id="genre" onChange={(e) => setSearch(e.target.value)}>
                <option value="">Tutti</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>
            </select>
            <ul>
                {
                    filteredMovies.map((element, index) => <Movie key={index} movie={element} />)
                }
            </ul>
        </main>
    )
}