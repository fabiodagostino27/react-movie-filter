export const Movie = (props) => {
    const movie = props.movie;

    return (
        <li>{movie.title}</li>
    )
}