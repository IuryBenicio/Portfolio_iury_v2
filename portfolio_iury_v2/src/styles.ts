import styled from "styled-components";

export const Draw = styled.div`
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
  position: relative;
  .buttons-menu {
    font-size: 20px;
    #First-button {
      cursor: pointer;
      position: absolute;
      top: 50px;
      right: 75px;
      display: flex;
      align-items: center;
      &:hover {
        color: grey;
      }
    }
    #Second-button {
      cursor: pointer;
      position: absolute;
      top: 90px;
      right: 75px;
      display: flex;
      align-items: center;
      &:hover {
        color: grey;
      }
    }
    #Third-button {
      cursor: pointer;
      position: absolute;
      top: 130px;
      right: 75px;
      display: flex;
      align-items: center;
      &:hover {
        color: grey;
      }
    }
  }
`;
