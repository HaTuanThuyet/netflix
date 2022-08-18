import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { useViewports } from '../hooks';
import { useDispatch } from 'react-redux';
import { setMovieDetails } from '../store/action';
// import Contens from './Contens';
// import { SmoothVerticalScrolling } from '../utils/index'

export default function MovieRow({ movies, title, isNetflix, idSection }) {
    const dispatch = useDispatch()
    const sliderRef = useRef();
    const itemRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setdragMove] = useState(0);
    const [isDrag, setisDrag] = useState(false);
    const [windowDimensions] = useViewports();


    const handleScrollRight = () => {
        const maxScrollLeft =
            sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft)
            sliderRef.current.scrollBy(itemRef.current.clientWidth * 2, 0);

    };

    const handleScrollLeft = () => {
        if (sliderRef.current.scrollLeft > 0)
            sliderRef.current.scrollBy(-itemRef.current.clientWidth * 2, 0);

    };

    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    }, [dragDown, dragMove, isDrag])
    const onDragStart = e => {
        setisDrag(true);
        setDragDown(e.screenX)
    }

    const onDragEnd = e => {
        setisDrag(false);

    }
    const onDragEnter = e => {
        setdragMove(e.screenX)

    }
    const handlSetMovie = (movie) => {
        dispatch(setMovieDetails(movie))
    }
    return (
        <MovieRosContainer draggable='false' id={idSection}>
            <h1 className='heading'>{title}</h1>
            <MoviesSlider ref={sliderRef}
                draggable='true'
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
                onDragEnter={onDragEnter}
                style={
                    movies && movies.length > 0 ? {
                        gridTemplateColumns: `repeat(${movies.length},
                            ${windowDimensions.width > 1200 ? "360px"
                                : windowDimensions.width > 992 ? "300px"
                                    : windowDimensions.width > 768 ? "250px" : "200px"
                            })`,
                    } : {}
                }
            >
                {movies && movies.length > 0 && movies?.map(
                    (movie, index) => {
                        if (movie.poster_path && movie.backdrop_path != null) {
                            let imageUrl = isNetflix
                                ? `http://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                            return (
                                <div
                                    key={index}
                                    className="movieIteam"
                                    draggable="false"
                                    ref={itemRef}
                                    onClick={
                                        () => handlSetMovie(movie)
                                    }

                                >
                                    <img
                                        src={imageUrl}
                                        alt=""
                                        draggable="false"
                                        onDragStart={(e) => {
                                            e.preventDefault();
                                        }}
                                    />
                                    <div className="movieName">{movie.title || movie.name}</div>
                                </div>)

                        }
                    }

                )}

            </MoviesSlider>
            <div className={`btnLeft ${isNetflix && 'isNetflix'}`} onClick={handleScrollLeft}>
                <FiChevronsLeft />
            </div>
            <div className={`btnRight ${isNetflix && 'isNetflix'}`} onClick={handleScrollRight}>
                <FiChevronsRight />
            </div>

        </MovieRosContainer>
    )
}

const MovieRosContainer = styled.div`
background-color: var(--color-background);
  color: var(--color-white); 
  padding-top: 100px;
  padding-right: 20px;
  padding-left: 20px;
  position: relative;
  width: 100%;
  height: 100%;    
  .heading {
    font-size: 18px;
    margin-bottom: 12px;
    user-select: none;
  }
  .btnLeft {
    position: absolute;
    height:50px;
    width:40px;
    border-radius: 4px;
    display:flex;
    top:45%;    
    left: 12px;
    transform: translateY(100%);
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0.4);
    align-items:center;
    &:hover {
        background-color: rgba(0,0,0,0.4);}
    
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s ease-out;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }
    &.isNetflix{
        height :100px;
        width:max-content;
    }
  }
  .btnRight {
    position: absolute;
    height:50px;
    width:40px;
    border-radius: 4px;
    display:flex;
    top:45%;    
    right: 12px;
    transform: translateY(100%);
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0,0,0,0.4);
    align-items:center;
    &:hover {
        background-color: rgba(0,0,0,0.4);}
    
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s ease-out;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }
    &.isNetflix{
        height :100px;
        width:max-content;
    }
  }
`;
/////     
const MoviesSlider = styled.div`
display: grid;
gap: 0px;
transition: all 0.3s linear;
user-select: none;
overflow-y: hidden;
overflow-x: auto;
overflow: hidden;  
padding-top: 28px;
padding-bottom: 28px;
scroll-behavior: smooth;
.movieIteam {
  transform: scale(1);
  max-width: 320px;
  max-height: 400px;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-out;
  user-select: none;
  overflow: hidden;
  border-radius: 6px;
  transform: center left;
 &:hover {
    transform: scale(1.1);
    z-index: 10;
    -webkit-filter: brightness(1) !important;
    filter: brightness(1) !important;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .movieName{
    position: absolute;
    left:0 ;
    right:0;
    bottom:0;
    padding:4px;
    text-align:center;
    font-size:14px;
    background-color:rgba(0,0,0,0.6);
  }
}
`;



