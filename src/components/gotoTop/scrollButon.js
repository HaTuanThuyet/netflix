
import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';
import { Button } from './Styles';

const ScrollButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <Button1 onClick={scrollToTop}
            style={{ display: visible ? 'inline' : 'none' }}>
            <FaArrowCircleUp />
        </Button1>
    );
}

export default ScrollButton;
const Button1 = styled.div `
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
`;