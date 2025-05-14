import styled, { keyframes } from "styled-components";

const gradientAnimation = keyframes`
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

export const ContatoContainer = styled.div`
  position: relative;
  width: 100dvw;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  .redes-sociais {
    margin-top: 16px;
    ul {
      display: flex;
      li {
        span {
          margin-left: 4px;
        }
        a {
          transition: all 0.4s ease-in-out;
          &:hover {
            transform: scale(1.2);
          }
          display: flex;
          align-items: center;
        }
        &:not(:first-child) {
          margin-left: 24px;
        }
      }
    }
  }

  form {
    padding: 40px;
    width: 50%;
    border: solid 1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    color: grey;
    .title {
      text-align: center;
      margin-bottom: 40px;
      font-size: 38px;
      font-weight: 100;
      color: grey;
    }
    label {
      &:not(:first-child) {
        margin-top: 8px;
      }
      span {
      }
      input {
        &:focus {
          outline: 1px solid rgba(0, 0, 0, 0.2);
        }
        margin-top: 8px;
        width: 100%;
        padding: 8px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        transition: 0.3s all ease-in-out;
      }
      textarea {
        &:focus {
          outline: 1px solid rgba(0, 0, 0, 0.2);
        }
        transition: 0.3s all ease-in-out;
        padding: 8px;
        margin-top: 8px;
        resize: none;
        width: 100%;
        height: 60px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      }
    }
    .btn-submit-off {
      padding: 8px;
      margin-top: 16px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.6s;
      background-color: grey;
      color: white;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
    }
    .btn-submit-on {
      padding: 8px;
      margin-top: 16px;
      border-radius: 8px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      transition: all 0.6s;
      background-color: #42e695;
      cursor: pointer;
      &:hover {
        background: linear-gradient(-45deg, #ff6ec4, #7873f5, #42e695, #facc6b);
        background-size: 300% 300%;
        animation: ${gradientAnimation} 6s ease infinite;
        transform: scale(1.1);
      }
    }
  }
`;
