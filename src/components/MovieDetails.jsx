import data from '../assets/data/MoviesData.json';
import SmallCarasole from './SmallCarasole';

function MovieDetails() {
    const movieList = data.filter((item) => item.isMovie);

    return ( <div>
        <h3>Movie Details</h3>
        <SmallCarasole data={movieList}/>
     </div> );
}

export default MovieDetails;