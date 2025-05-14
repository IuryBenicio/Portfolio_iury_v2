import styled from "styled-components";

export const ProjetosContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  color: black;
  .content {
    width: 100%;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    ul {
      z-index: 2;
      display: flex;
      width: 100%;
      justify-content: space-around;
      .projeto-2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 207px;
        width: 350px;
        color: grey;

        .data {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-bottom: 10px;
          span {
            font-size: 30px;
            margin-top: 8px;
            font-weight: 500;
            margin-bottom: 8px;
          }
          img {
            width: 100px;
          }
          .tecnologias {
            margin-top: 16px;
            ul {
              li {
                font-size: 30px;
              }
            }
          }
        }
      }
      .projeto-3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 299px;
        width: 350px;
        color: grey;
        .data {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-top: 10px;
          span {
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 8px;
          }
          img {
            width: 110px;
            background-color: grey;
            border-radius: 8px;
          }
          .tecnologias {
            margin-top: 16px;
            ul {
              li {
                font-size: 30px;
              }
            }
          }
        }
      }
      .projeto-4 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 337px;
        width: 350px;
        color: grey;
        .data {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-bottom: 10px;
          span {
            font-size: 30px;
            font-weight: 500;
            margin-bottom: 8px;
          }
          img {
            width: 350px;
          }
          .tecnologias {
            margin-top: 16px;
            ul {
              li {
                font-size: 30px;
              }
            }
          }
        }
      }
      .projeto-1 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 239px;
        width: 350px;
        color: grey;
        .data {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-top: 10px;
          span {
            font-size: 30px;
            font-weight: 500;
            margin-top: 4px;
          }
          img {
            width: 200px;
            border-radius: 8px;
          }
          .tecnologias {
            margin-top: 16px;
            ul {
              li {
                font-size: 30px;
              }
            }
          }
        }
      }
      .projeto-5 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 231px;
        width: 350px;
        color: grey;
        .data {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-top: 10px;
          span {
            font-size: 30px;
            font-weight: 500;
            margin-top: 4px;
          }
          img {
            width: 350px;
            border-radius: 8px;
          }
          .tecnologias {
            margin-top: 16px;
            ul {
              li {
                font-size: 30px;
              }
            }
          }
        }
      }
    }
    hr {
      top: 49.7%;
      position: absolute;
      width: 98%;
      height: 3px;
      background-color: black;
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
