import { movies } from "./data/movies";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
    return (
        <>
            <Header />
            <Main movies={movies} />
        </>
    )
};

export default App
