import styled, { keyframes } from "styled-components";

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
`;

export const InitialContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  transition: width 0.6s ease, height 0.6s ease, opacity 0.6s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(-45deg, #ff6ec4, #7873f5, #1fd1f9, #ff9a9e);
  background-size: 300% 300%;
  animation: ${gradient} 15s ease infinite;
  overflow: hidden;
  .data {
    text-align: center;
    h2 {
      margin-bottom: 34px;
      font-size: 3.5em;
      font-weight: 300;
    }
    a {
      font-size: 1em;
      color: white;
      transition: all 0.4s ease-in-out;
      cursor: pointer;
      &:hover {
        color: grey;
      }
    }
  }
`;
