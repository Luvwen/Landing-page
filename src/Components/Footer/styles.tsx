import styled from "styled-components";

// footer

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  margin-top: 25px;
`;

// footer logo

export const FooterLogo = styled.img<{ width: string; height: string }>`
  position: relative;
  top: 30px;
  left: 225px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

// footer text

export const FooterContainerLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  right: 50px;
  top: 15px;
  width: 40%;
  margin-right: 200px;
  margin-left: 200px;
`;

export const FooterTextContainer = styled.div``;

export const FooterLinks = styled.a`
  text-decoration: none;
  color: hsl(201, 11%, 66%);
  &:hover {
    background-color: #0769e9;
    transition: 0.5s;
    padding: 4px 6px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
  }
`;

// footer icons

export const FooterIconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 50px;
  right: 350px;
  width: 150px;
`;

export const FooterLink = styled.a``;

export const FooterLinkImg = styled.img`
  width: 15px;
  height: 15px;
`;
