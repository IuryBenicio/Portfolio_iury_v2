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

type props = {
  language: "Portuguese" | "English";
};

export const InitialContainer = styled.div<props>`
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
  position: relative;
  .data {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .flags {
      width: 150px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: 150px;
      .usa-flag {
        cursor: pointer;
        transition: all ease-in-out 0.5s;
        opacity: ${(props: props) => (props.language === "English" ? 1 : 0.3)};
        &:hover {
          transform: scale(
            ${(props: props) => props.language === "Portuguese" && 1.2}
          );
        }
      }
      .bra-flag {
        cursor: pointer;
        transition: all ease-in-out 0.5s;
        opacity: ${(props: props) =>
          props.language === "Portuguese" ? 1 : 0.3};
        &:hover {
          transform: scale(
            ${(props: props) => props.language === "English" && 1.2}
          );
        }
      }
      img {
        width: 48%;
      }
    }
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
