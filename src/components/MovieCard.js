import React, { Component } from "react";

class MovieCard extends Component {
    state = { movieData: {} }
    render() { 

        const { 
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating
        } = this.state.movieData;

        if (!Poster || Poster === 'N/A') {
            return null;
        }

        return (
                    <div className='movie-card-container'>
                          <div className='image-container'>
                             <div className='bg-image' style={{ 
                                 backgroundImage: `url(${Poster})`
                             }}/>
                          </div>
                          
                          <div className='movie-info'>
                           <h2>Movie Details</h2>
                              <div>
                                <h1>{Title}</h1>
                                <small>Released Date: {Released} </small>
                              </div>
                              <h4>Rating: {imdbRating}</h4>
                               <p>{Plot && Plot.substr(0, 350)}</p>

                               <div className='tags-container'>
                                        {Genre && Genre.split(', ').map(g => ( <span key={g}>{g}</span> ))}
                               </div>
                          </div>
                    </div>
         );
    }
}
 
export default MovieCard;