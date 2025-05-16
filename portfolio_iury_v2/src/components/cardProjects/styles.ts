import styled from "styled-components";

export const CardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-bottom: 24px;
  }
  .image-div {
    img {
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      width: 100%;
      object-fit: cover;
    }
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  .text {
    padding: 0 16px;
    padding-top: 12px;
  }
`;
