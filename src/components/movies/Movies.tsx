import { useState, useEffect } from 'react'
import MovieCard from '../../common/movieCard/movieCard'

import './movies.scss'

const MoviesComponent = () => {

    const [movies, setMovies] = useState<Array<any>>([])
    const baseUrl = "https://omdbapi.com/?apikey=f29a2d68&t=";
    const allMovies = [
        "The Shawshank Redemption",
        "The Godfather",
        "The Godfather: Part II",
        "The Dark Knight",
        "Spider-man",
        "Spider-man 2",
        "Spider-man 3",
        "The matrix",
        "A Clockwork Orange",
        "Alien",
        "lovecraft"
    ]

    useEffect(() => {
        getData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getData = () => {
        let res: any
        let auxMovies: any = []

        try {
            allMovies.map(async (movie: string) => {
                let firstData = await fetch(`${baseUrl}${movie}`)
                res = await firstData.json()
                auxMovies.push(res)
            })

            setTimeout(() => {
                if (auxMovies.length > 0) {
                    setMovies(auxMovies)
                }
            }, 500);


        } catch (err) {
            console.log({ errorMessage: err });
        }
    }

    return (
        <div className='movies-container'>
            <div className='tabs-container'>
                <button>All</button>
                <button>New Releases</button>
                <button>Most Popular</button>
                <button>Trends</button>
                <button>Recomendations</button>
            </div>
            <div className='movies-list-container'>
                {movies.length ? movies.sort((a: any, b: any) => a.year - b.year).map((movie: any, indx: number) =>
                    <MovieCard key={indx} indx={indx} poster={movie.Poster} title={movie.Title} description={movie.Plot} />
                ) :
                    <div className='loading-container'>
                        <div className='loading'>Loading...</div>
                        <div className="loader"></div>
                    </div>
                }
            </div>
        </div>
    )
}

export default MoviesComponent