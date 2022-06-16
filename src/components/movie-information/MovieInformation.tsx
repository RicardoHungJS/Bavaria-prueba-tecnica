import { useParams } from 'react-router-dom';
import './movieInformation.scss'

const MovieInformation = () => {

    const params = useParams();

    console.log(params.imgUrl);

    const httpString = params?.imgUrl?.replaceAll('!', '/')

    return (
        <div className="movieInfo-container">
            <div className='img-container'>
                <img src={httpString} alt="movie-img" />
            </div>
            <div className='texts-container'>
                <h1>{params.title}</h1>
                <p>{params.description}</p>
            </div>
        </div>
    )
}

export default MovieInformation