import { useWindowDimension } from './useWindowDimension';
import styled, { css } from 'styled-components';
import "./styles/new-background.scss";

const StarLayer = styled.div`
  z-index: -10;
  border-radius: 50%;
  background: transparent;

  ${props => props.starSize && css`
        width: ${props.starSize};
        height: ${props.starSize};
    `};

  ${props => props.stars && css`
        box-shadow: ${props.stars}
    `};
`;

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

function setStars(widthWindow, heightWindow) {
  let stars = "";
  let starCount = 300;
  let starColor = "#FFF";

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

const NewBackground = () => {
  const [width, height] = useWindowDimension();
  const stars = setStars(width, height);
  // const layer = setStarLayer(10);

  return (
    <div className="container">
      <StarLayer stars={stars} starSize={"10px"} />
    </div>
  );
}

export default NewBackground;