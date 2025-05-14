import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100dvw;
  .data {
    width: 80dvw;
    justify-content: space-around;
    display: flex;
    align-items: center;
    .degrade {
      pointer-events: none;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 2;
      top: 0;
      left: 0;
      background: #ffffff;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0) 20%,
        rgba(255, 255, 255, 0) 80%,
        rgba(255, 255, 255, 1) 100%
      );
    }
    .image {
      width: 49%;

      border-radius: 50%;
      img {
        border-radius: 50%;
        object-fit: cover;
        aspect-ratio: 1 / 1;
        width: 100%;
      }
    }
    .text {
      width: 49%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .slide {
        margin: 40px;
        width: 100%;
        position: relative;
        @media screen and (max-width: 950px) {
          img {
            width: 20px;
          }
        }
        img {
          width: 50px;
        }
      }
      h1 {
        font-weight: 300;
        font-size: 3em;
        margin-bottom: 16px;
      }
      span {
        font-size: 2em;
        font-weight: 100;
      }
    }
  }
`;
