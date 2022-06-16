import React from 'react'
import { NavLink } from 'react-router-dom'

import './movieCard.scss'

interface MovieCardProps {
    indx: number,
    poster: string,
    title: string,
    description: string
}

const MovieCard = ({ indx, poster, title, description }: MovieCardProps) => {

    const httpString = poster.replaceAll('/', '!')
    
    const lorem = "lorem ipsum dolor sit amet consectetur adipisicing elit. Ab itaque ipsum architecto animi."

    return (
        <div className='movie-card' key={indx}>
            <img className='movie-image' src={poster} alt='movie'></img>
            <div className='movie-hover-container'>
                <div className='movie-hover'>
                    <p className='text-movie-hover'>{title}</p>
                    <NavLink to="/" className='yellow-button'>Watch now</NavLink>
                    <NavLink to={`/movie_information/${httpString}/${title}/${description}`} className='transparent-button'>More info</NavLink>
                </div>
            </div>
        </div>
    )
}
export default MovieCard