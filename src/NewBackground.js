// import { useWindowDimension } from './useWindowDimension';
import React from "react";
import styled, { css } from 'styled-components';
import "./styles/new-background.scss";

const StarLayer = styled.div`
  z-index: -10;
  border-radius: 50%;
  background: transparent;
  color: red;

  ${props => props.starSize && css`
        width: ${props.starSize};
        height: ${props.starSize};
    `};

  ${props => props.stars && css`
        box-shadow: ${props.stars}
    `};

  ${props => props.animation && css`
        ${props.animation}
    `};  

  ${props => props.fadeAnim && css`
    ${props.fadeAnim}
  `}; 

  ${props => props.animSpeed && props.animIndex && props.fadeIndex && css`
        animation: animStar${props.animIndex} ${props.animSpeed} linear infinite, fadeInOut${props.fadeIndex} ${props.animSpeed} linear infinite;
    `};

`;

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function setStars(widthWindow, heightWindow, starCount, starColor) {
  let stars = "";

  for (let i = 0; i < starCount; i++) {
    if (i === starCount-1) {
      stars += `${randomInt(widthWindow)}px ${randomInt(heightWindow)}px ${starColor}`;
    } else {
      stars += `${randomInt(widthWindow)}px ${randomInt(heightWindow)}px ${starColor}, `;
    }
  }

  return stars;

  // document.querySelector(".sky").innerHTML = stars;
}

// function setStarLayer(starSize) {
//   const stars = setStars();
//   const starLayer = `
//     z-index: -10;
//     width: ${starSize}px;
//     height: ${starSize};
//     border-radius: 50%;
//     background: transparent;
//     box-shadow: ${stars};`

//   // const elem = document.getElementById("stars-1");
//   // if (elem) {
//   //   elem.style = starLayer;
//   // }
  
//   return starLayer;
// }

// window.onload = init;
// window.onresize = init;

const NewBackground = React.memo(() => {
  const [width, height] = [window.innerWidth, window.innerHeight];

  const starAnim = (index, startX, startY, endX, endY) => css`
    @keyframes animStar${index} {
      from {
        transform: translateX(${startX}px) translateY(${startY}px);
      }
      to {
        transform: translateX(${endX}px) translateY(${endY}px);
      }
    }`;

  const fadeAnim = (index, startPerc, endPerc) => css`
    @keyframes fadeInOut${index} {
      0% {opacity:0;}
      ${startPerc}% {opacity:1;}
      ${endPerc}% {opacity:1;}
      100% {opacity:0;}
    }
  `;

  // First layer
    const stars1 = setStars(2*width, 2*height, 1000, '#FFF');
    const starAnim1 = starAnim(1, 0, 0, -2*width, -2*height);
    const starFadeAnim1 = fadeAnim(1, 3, 90);

    const stars1_Copy = setStars(2*width, 2*height, 1000, '#FFF');
    const starAnim1_Copy = starAnim(2, width, height, -width, -height);

  // Second layer
  const stars2 = setStars(2*width, 2*height, 500, '#FFF');
  const starAnim2 = starAnim(3, 0, 0, -2*width, -2*height);
  const starFadeAnim2 = fadeAnim(2, 2, 93);

  const stars2_Copy = setStars(2*width, 2*height, 500, '#FFF');
  const starAnim2_Copy = starAnim(4, width, height, -width, -height);

  // Third layer
  const stars3 = setStars(2*width, 2*height, 300, '#FFF');
  const starAnim3 = starAnim(5, 0, 0, -2*width, -2*height);
  const starFadeAnim3 = fadeAnim(3, 2, 95);

  const stars3_Copy = setStars(2*width, 2*height, 300, '#FFF');
  const starAnim3_Copy = starAnim(6, width, height, -width, -height);

  return (
    <div className="container">
      <StarLayer stars={stars1} starSize={"1px"} animation={starAnim1} animSpeed={'100s'} animIndex={1} fadeAnim={starFadeAnim1} fadeIndex={1} />
      <StarLayer stars={stars1_Copy} starSize={"1px"} animation={starAnim1_Copy} animSpeed={'100s'} animIndex={2} fadeAnim={starFadeAnim1} fadeIndex={1} />
      <StarLayer stars={stars2} starSize={"2px"} animation={starAnim2} animSpeed={'120s'} animIndex={3} fadeAnim={starFadeAnim2} fadeIndex={2} />
      <StarLayer stars={stars2_Copy} starSize={"2px"} animation={starAnim2_Copy} animSpeed={'120s'} animIndex={4} fadeAnim={starFadeAnim2} fadeIndex={2} />
      <StarLayer stars={stars3} starSize={"3px"} animation={starAnim3} animSpeed={'170s'} animIndex={5} fadeAnim={starFadeAnim3} fadeIndex={3} />
      <StarLayer stars={stars3_Copy} starSize={"3px"} animation={starAnim3_Copy} animSpeed={'170s'} animIndex={6} fadeAnim={starFadeAnim3} fadeIndex={3} />
    </div>
  );
});

export default NewBackground;