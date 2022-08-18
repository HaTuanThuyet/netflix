import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Contens from '../contents/Contens'
import Intro from '../intro/Intro'
import Menus from '../Menus/Menus'
import MovieDetail from '../movieDetail/movieDetail'

export default function Home(props) {
    const { MovieDetaill } = useSelector(state => state.reducerMovies);
    // const [IsShowMovieDetail, setIsShowMovieDetail] = useState(false)
    // useEffect(() => {
    //     setIsShowMovieDetail(MovieDetail ? true : false)
    // },[MovieDetaill])
    // console.log(MovieDetaill);
    return (
        <div>
            <Intro/>
            <Contens/>
            <Menus/>
            <MovieDetail showModal={MovieDetaill ? true : false} movie={MovieDetaill}  />
        </div>
    )
}

