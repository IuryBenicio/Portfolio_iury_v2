import styled from "styled-components";

export const FormacoesContainer = styled.div`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .formacoes {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 8px;
    @media screen and (max-width: 450px) {
      width: 95%;
    }
    .header {
      display: flex;
      margin: 0 auto;
      width: 100%;
      li {
        &:not(:first-child) {
          border-top-right-radius: 7px;
        }
        &:not(:last-child) {
          border-top-left-radius: 7px;
        }
        padding: 16px;
        width: 100%;
        text-align: center;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          color: white;
          background-color: grey;
        }
      }
    }
    .body {
      padding: 16px;
      padding-top: 8;
      @media screen and (max-width: 450px) {
        padding: 4px;
      }
      .sobre-div {
        @media screen and (max-width: 450px) {
          font-size: 20px;
          padding: 8px;
          margin: 0;
          span {
            font-size: 16px;
          }
        }
        font-size: 26px;
        text-align: center;
        font-weight: 100;
        color: grey;
        padding: 16px;
        span {
          @media screen and (max-width: 450px) {
            font-size: 16px;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.4);
            padding: 16px;
          }
          font-size: 20px;
        }
      }
      .formacao-div {
        padding: 0;
        .formacoes-item {
          &:not(:first-child) {
            margin-top: 16px;
          }
          text-align: center;
          span {
            font-size: 45px;
          }
          .curso {
            color: grey;
            font-size: 24px;
            font-weight: 200;
          }
          .progresso {
            font-size: 18px;
            color: grey;
            font-weight: 900;
          }
        }
      }
    }
  }
  .buttons {
    @media screen and (max-width: 450px) {
      top: 25px;
      left: 25px;
    }
  }
`;
