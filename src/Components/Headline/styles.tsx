import styled from "styled-components";

// logo container

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 200px;
`;

export const LogoImg = styled.img<{ width: string; heigth: string }>`
  margin-top: 55px;
  overflow: visible;
  width: ${({ width }) => width};
  height: ${({ heigth }) => heigth};
`;

// download container

export const Container = styled.div`
  margin-bottom: 100px;
`;

export const ContainerItems = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 15px;
  font-weight: 300;
`;

export const TitleText = styled.p`
  margin-left: 17%;
  margin-right: 18%;
  text-align: center;
  color: hsl(201, 11%, 66%);
  font-size: 17px;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 25px;
`;

export const Link = styled.button<{ variant?: "ios" }>`
  margin-right: 25px;
  text-decoration: none;
  background: ${({ variant }) =>
    variant === "ios" ? "hsl(171, 66%, 44%)" : "hsl(233, 100%, 69%)"};
  color: white;
  padding: 10px 22px;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;
