import React from 'react'
import {  FaHotjar, FaStar } from 'react-icons/fa'
import { MdTheaterComedy } from 'react-icons/md'
import {SiNetflix} from 'react-icons/si'
import styled from 'styled-components';
// import MenuItem from './MenuItem';
import {
    GiNinjaHeroicStance,
    GiRomanToga,
    GiGhost,
    GiBandageRoll,
} from "react-icons/gi";
import MenuItem from './MenuItem';


export default function Menus(props) {
    return (
        <MenusPane>
            <MenuItem to="netflix" name="Netflix" Icon={SiNetflix} />
            <MenuItem to="trending" name="Trending" Icon={FaHotjar} />
            <MenuItem to="topRated" name="Top rated" Icon={FaStar} />
            <MenuItem
                to="actionMovies"
                name="Actions Movies"
                Icon={GiNinjaHeroicStance}
            />
            <MenuItem to="comedyMovies" name="Comedy Movies" Icon={MdTheaterComedy} />
            <MenuItem to="horrorMovies" name="Horror Movies" Icon={GiGhost} />
            <MenuItem to="romanceMovies" name="Romance Movies" Icon={GiRomanToga} />
            <MenuItem to="documentaries" name="Documentaries" Icon={GiBandageRoll} />
        </MenusPane>

    );
}




const MenusPane = styled.div`
  position: fixed;
  left: 0%;
  top: 20%;
  width: 46px;
  padding: 4px 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: left center;
  transition: all 0.3s linear;
  &:hover {
    width: 180px;
    background: rgba(0, 0, 0, 0.7);
  }
  .subMenu {
    display: flex;
    align-items: center;
    width: max-content;
    margin-left: 2px;
    padding: 4px 6px;
    cursor: pointer;
    .icon {
      font-size: 30px;
      margin-right: 8px;
      color: #2b2da5;
      &:hover {
       color: green;
      }
    }
    .icon1 {
        font-size: 30px;
        margin-right: 8px;
        color: red;
        &:hover {
         color: #2b2da5;
        }
      }
    .icon2 {
        font-size: 30px;
        margin-right: 8px;
        color: green;
        &:hover {
         color: red;
        }
    }
    .icon3 {
        font-size: 30px;
        margin-right: 8px;
        color: violet;
        color: #2b2da5;
        &:hover {
         color: blue;
        }
    }
    .icon4 {
        font-size: 30px;
        margin-right: 8px;
        color: orange;
        &:hover {
         color: pink;
        }
    }
    .icon5{
        font-size: 30px;
        margin-right: 8px;
        color: pink;
        &:hover {
         color: violet;
        }
    }
    .icon6 {
        font-size: 30px;
        margin-right: 8px;
        color: brown;
        &:hover {
         color: orange;
        }
    }
    .icon7 {
        font-size: 30px;
        margin-right: 8px;
        color: #f6f6f6;
        &:hover {
         color: brown;
        }
      }
    span {
      font-size: 16px;
      font-weight: 400;
      z-index:21;
      color: rgba(255, 255, 255, 0.6);
      &:hover {
        color: #fff;
      }
    }
  }
`;
