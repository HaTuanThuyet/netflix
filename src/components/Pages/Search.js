import React from 'react'
import { useSelector } from 'react-redux';
import MovieDetail from '../movieDetail/movieDetail'
import SearchMovies from '../SearchMovie/SearchMovies'

export default function Search(props) {
  const { MovieDetaill } = useSelector(state => state.reducerMovies);

  return (
    <div>
        <SearchMovies/>
        <MovieDetail showModal={MovieDetaill ? true : false} movie={MovieDetaill}/>
    </div>
  )
}
