import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getActionMovies, getComedyMovies, getDocumentaries, getHorrorMovies, getNetflixOriginals, getRomanceMovies, getTopRatedMovies, getTrendingMovies } from '../store/action';
import MovieRow from './MovieRow'
import {FaArrowAltCircleUp} from 'react-icons/fa'
import styled from 'styled-components';
import { animateScroll as scroll} from 'react-scroll';
import { useScroll } from '../hooks';


export default function Contens(props) {
  const [scrollDimensions] = useScroll();
  const dispatch = useDispatch();
  const { NetflixOriginal } = useSelector(state => state.reducerMovies);
  const { TrendingMovies } = useSelector(state => state.reducerMovies);
  const { TopRateMovies } = useSelector(state => state.reducerMovies);
  const { ActionMovies } = useSelector(state => state.reducerMovies);
  const { ComedyMovies } = useSelector(state => state.reducerMovies);
  const { HorrorMovies } = useSelector(state => state.reducerMovies);
  const { RomanceMovies } = useSelector(state => state.reducerMovies);
  const { Documentaries } = useSelector(state => state.reducerMovies);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  ///call Api 
  useEffect(() => {
    dispatch(getNetflixOriginals())
    dispatch(getTrendingMovies())
    dispatch(getTopRatedMovies())
    dispatch(getActionMovies())
    dispatch(getComedyMovies())
    dispatch(getHorrorMovies())
    dispatch(getRomanceMovies())
    dispatch(getDocumentaries())
  }, [dispatch])

  return (
    <div>
      <MovieRow movies={NetflixOriginal} title='Netflix Originals' isNetflix={true} idSection='netflix' />
      <MovieRow movies={TrendingMovies} title='Trending Movies' idSection='trending' />
      <MovieRow movies={TopRateMovies} title='Top Rated Movies'idSection='topRated' />
      <MovieRow movies={ActionMovies} title='Action Movies' idSection='actionMovies'/>
      <MovieRow movies={ComedyMovies} title='Comedy Movies' idSection='comedyMovies'/>
      <MovieRow movies={HorrorMovies} title='Horror Movies' idSection='horrorMovies'/>
      <MovieRow movies={RomanceMovies} title='Romance Movies' idSection='romanceMovies'/>
      <MovieRow movies={Documentaries} title='Documentaries ' idSection='documentaries'/>
      <GoToTop onClick={()=>scrollToTop()}
      style={{
        visibility: `${
          scrollDimensions.scrollY  > 600 ? "visible" : "hidden"
        }`,
      }}>
        <FaArrowAltCircleUp/>
      </GoToTop>
     
    </div>

)
}
const GoToTop=styled.div`
position: fixed;
  z-index: 10;
  right: 70px;
  bottom: 50px;
  cursor: pointer;
  font-size: 50px;
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
  @media screen and (max-width: 600px) {
    right: 40px;
  }
`






