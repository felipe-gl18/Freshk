import styled, { css, keyframes } from "styled-components";

import waveImg from "../assets/wave.png";

const waveAnimation = keyframes`
  0% {background-position-x: 0px;}
  100% {background-position-x: 1000px;}
`;

const waveAnimation2 = keyframes`
  0% {background-position-x: 0px;}
  100% {background-position-x: -1000px;}
`;

const StyledWaves = styled.div`
  position: relative;
  width: 100%;
`;

const Wave = styled.div<{ wave: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(${waveImg});
  background-size: 1000px 100px;

  ${({ wave }) =>
    wave === 1 &&
    css`
      animation: ${waveAnimation} 30s linear infinite;
      z-index: 1000;
      opacity: 1;
      animation-delay: 0s;
      bottom: 0;
    `}
  ${({ wave }) =>
    wave === 2 &&
    css`
      animation: ${waveAnimation2} 15s linear infinite;
      z-index: 999;
      opacity: 0.5;
      animation-delay: -5s;
      bottom: 10px;
    `}
    ${({ wave }) =>
    wave === 3 &&
    css`
      animation: ${waveAnimation} 30s linear infinite;
      z-index: 998;
      opacity: 0.2;
      animation-delay: -2s;
      bottom: 15;
    `}
    ${({ wave }) =>
    wave === 4 &&
    css`
      animation: ${waveAnimation} 5s linear infinite;
      z-index: 997;
      opacity: 0.7;
      animation-delay: 0s;
      bottom: 20px;
    `}
`;

export default function Waves() {
  return (
    <StyledWaves>
      <Wave wave={1} />
      <Wave wave={2} />
      <Wave wave={3} />
      <Wave wave={4} />
    </StyledWaves>
  );
}
