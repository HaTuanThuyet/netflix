import React,{ useState } from 'react'
import ReactPlayer from 'react-player'
import { VscMute ,VscUnmute } from 'react-icons/vsc'
import styled from 'styled-components';

export default function Intro(props) {
    const [isMuted, setIsMuted] = useState(true);
    return (
        <IntroSection>
            <ReactPlayer
                playing={true}
                loop={true}
                width='100%'
                height='100%'
                volume={1}
                muted={isMuted}
                url='https://vimeo.com/316941203'
                className="videoIntro"
        
            />
            <div className='infoIntro'>
                <h1 className='heading'>Netflix Elite</h1>
                <p className='overview'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea omnis vero veniam cumque quas at consequatur, minus non dolor repellat.
                    Obcaecati sapiente nobis, quasi cumque aliquam ab harum alias corrupti.</p>
            </div>
            {isMuted ? (
                <VscMute
                    className="btnVolume"
                    onClick={() => setIsMuted((prev) => !prev)}
                />
            ) : (
                <VscUnmute
                    className="btnVolume"
                    onClick={() => setIsMuted((prev) => !prev)}
                />
            )}
            <div className="fadeBottom"></div>

        </IntroSection>
    )
}
const IntroSection = styled.div`
  background-color: var(--color-background);
  position: relative;
  padding-top: 56%;
  color: var(--color-white);
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
  }
  #player{
    max-width:100% ;
  }
  .infoIntro {
    position: absolute;
    top: 240px;
    left: 100px;
    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }
    .heading {
      font-size: 60px;
      transition: all 0.3s;
      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 600px) {
        font-size: 24px;
      }
    }
    .overview {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }
  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
  .btnVolume {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 70%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: #fff solid 1px;
    transition: all 0.3s;
    transform: scale(1);
    &:hover {
      color: #fff;
      background-color: rgba(211, 211, 211, 0.178);
      transform: scale(1.2);
      transition: all 0.3s;
    }
    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
      padding: 4px;
    }
    @media screen and (max-width: 600px) {
      height: 20px;
      width: 20px;
      padding: 1px;
    }
  }
`;