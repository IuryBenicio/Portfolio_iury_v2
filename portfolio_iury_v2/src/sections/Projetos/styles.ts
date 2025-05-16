import styled from "styled-components";

export const ProjetosContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  color: black;
  @media screen and (max-width: 450px) {
    overflow: scroll;
    .buttons {
      position: fixed;
    }
  }
  .content {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 450px) {
      display: flex;
      flex-direction: column;
      height: auto;
    }

    .div-mobile {
      padding: 16px;
      .motion-div {
        &:not(:last-child) {
        }
        margin-bottom: 16px;
      }
    }

    //PC
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
    position: fixed;
    @media screen and (max-width: 450px) {
      padding-right: 8px;
      top: 25px;
      left: 25px;
      background: #ffffff;
      background: -webkit-linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 35%,
        rgba(255, 255, 255, 1) 65%,
        rgba(255, 255, 255, 0) 100%
      );
      background: -moz-linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 35%,
        rgba(255, 255, 255, 1) 65%,
        rgba(255, 255, 255, 0) 100%
      );
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 35%,
        rgba(255, 255, 255, 1) 65%,
        rgba(255, 255, 255, 0) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#FFFFFF", GradientType=0);
    }
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
