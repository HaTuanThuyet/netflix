import React, { useEffect, useState } from 'react'
import NetfilxLogo from '../../assets/Images/Logonetflix.png'
import { MdSearch, } from 'react-icons/md'
// import { useScroll } from '../hooks/useScroll'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components';

export default function Navbar() {
  // const {scrollY} = useScroll();
  const [scrollY, setScrollY] = useState(0);
  const [keywords, setkeywords] = useState('');
  const navigate = useNavigate()
  const handleChangeInput = (e) => {
    let keywords = e.target.value;
    setkeywords(keywords)
     if (keywords.length > 0){
       navigate(`/search?keyword=${keywords.trim()}`)}
      else navigate('/')
  }
  const goHome = () => {
    navigate('./');
    setkeywords('./');
  }

  const handleScrollY = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    setScrollY(scrollY)
  }
  useEffect(() => {
    handleScrollY();
    window.addEventListener('scroll', handleScrollY)
    return () => {
      window.removeEventListener('scroll', handleScrollY)

    }

  }, [])
  return (
    <Navigation
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }>
      <div className='navContainer'>
        <div className='logo' onClick={goHome}>
          <img src={NetfilxLogo} alt="" />
        </div>
        <div className='navSearch'>
          <MdSearch className='iconSearch' />
          <input type="text" placeholder='Input tiitle film'
            onChange={handleChangeInput}
            value={keywords} />
        </div>
      </div>

    </Navigation>
  );

}
const Navigation = styled.nav`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: var(--height-navbar);
  padding: 0px 00px;
  transition-timing-function: ease-in;
  transition: all 1s;
  top: 0;
  .navContainer {
    background-color:transparent;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }
    .logo {
      width: 150px;
      cursor: pointer;
      img {
        width: 100%;
      }
    }
    .subNav {
      font-weight: 500;
      font-size: 14px;
      color: var(--color-white);
      text-decoration: none;
      margin-right: 20px;
      transition: all 0.2s;
      cursor: pointer;
    }
    .navSearch {
      color: var(--color-white);
      padding-right: 20px;
      display: flex;
      justify-content: flex-end;
      &:hover .iconSearch {
        color: var(--color-white);
      }
      .iconSearch {
        width: 20px;
        height: 20px;
        cursor: pointer;
        transform: translateX(24px) translateY(10px);
        color: #bbb;
      }
      input {
        font-size: 14px;
        border: none;
        color: var(--color-white);
        outline: none;
        width: 0px;
        padding: 10px;
        background: var(--color-background);
        border: 1px solid #fff;
        transition: width 0.5s;
        cursor: pointer;
        opacity: 0;
        &:focus {
          padding-left: 26px;
          width: 300px;
          cursor: text;
          opacity: 1;
          border-radius: 4px;
        }
      }
    }
  }
`;
