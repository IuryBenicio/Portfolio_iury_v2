import styled from "styled-components";

export const ProjetosContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  color: black;
  .content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    .swiper_container {
      .swiper-slide {
        width: 83%;
        border-radius: 8px;
        .card {
          position: relative;
          .body {
            .title {
              font-size: 40px;
            }
            p {
              padding: 0;
              margin: 0;
              font-size: 22px;
            }
            .tecnologias {
              font-size: 70px;
            }
            text-align: center;
            padding: 100px;
            opacity: 0;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            transition: all 0.4s ease-in-out;
          }
          &:hover {
            .body {
              opacity: 1;
            }
          }
          img {
            width: 100%;
            border-radius: 2px;
            object-fit: cover;
            height: 100%;
          }
        }
      }
    }
  }
  .buttons {
    color: black;
    z-index: 4;
    cursor: pointer;
    position: absolute;
    top: 50px;
    left: 50px;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    &:hover {
      color: grey;
    }
  }
`;
