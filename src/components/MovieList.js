import React, { Component } from "react";
import MovieCard from './MovieCard';
import axios from "axios";

class MovieList extends Component {
    state = { moviesList: ["tt3896198"],
              searchTerm: ""
     };

     search = event => {
         event.preventDefault();
          axios.get(`https://www.omdbapi.com/?apikey=397560a3&s=${this.state.searchTerm }&plot=full`)
      .then(res => res.data)
      .then(res => {
          if (!res.Search) {
              this.setState({ movieList: [] });
              return;
          }

          const movieList = res.Search.map(movie => movie.imdb.ID);
          this.setState({ movieList });
      });
     };

         handleChange = event => {
             this.setState({ searchTerm: event.target.value });
         };

    render() { 

        const { moviesList } = this.state;


        return (
                <div> 
                   <form onSubmit={this.search}>
                   <input placeholder="Search for a movie" onChange={this.handleChange} />
                   <button type="submit">Search
                   <i className="fas fa-search" />
                   </button>
                   </form>

                   {moviesList.length > 0 ? (
                       moviesList.map(movie => (<MovieCard movieID={movie} 
                       key={movie} /> ))
                   ) : (
                       <p>Couldn`t find any movie. Please search again using another criteria. </p>
                   
                   )}
                </div>
         );
    }
}
 
export default MovieList;