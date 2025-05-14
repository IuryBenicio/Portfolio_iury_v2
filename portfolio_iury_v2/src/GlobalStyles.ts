import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Quicksand", sans-serif;
        text-decoration: none;
        list-style: none;
        a{
            color: black;
        }
        &::-webkit-scrollbar { 
            display: none;
            .swiper-slide {
            display: flex;
            align-items: center;
            justify-content: center;
            }
        }   
        .cursor{
            cursor: pointer;
        }
          .buttons {
    z-index: 3;
    cursor: pointer;
    position: absolute;
    top: 50px;
    left: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: grey;
    }
  }
    }
`;
