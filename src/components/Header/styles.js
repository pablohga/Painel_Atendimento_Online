import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;

  background-color: #969696;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 120px;
  }

  h1 {
    font-size: 18px;
    margin-left: 20px;
  }
`;

export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 20px;

    h3 {
      font-size: 16px;
    }

    button {
      background: none;
      font-size: 14px;
      opacity: 0.6;
      color: #fff;
      text-align: right;
      transition: all 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
