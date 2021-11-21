import styled from "styled-components";

export const Header = styled.header`
  height: 70px;
  margin-bottom: 70px;
  background-color: #f32b46;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-right: 40px;
  max-width: 1920px;
  margin: 0 auto;
`;

export const ContainerMode = styled.div`
  display: flex;
  justify-content: center;
`;

export const Paragraph = styled.p``;

export const Logo = styled.a`
  line-height: 70px;
  padding-left: 40px;
  font-size: 30px;
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export const IconContainer = styled.div`
  margin-left: 40px;
  display: flex;
  line-height: 80px;
  max-width: max-content;
`;

export const IconTheme = styled.img`
  width: 25px;
  margin-left: 15px;
  margin-top: -2px;
`;

export const IconText = styled.p`
  color: #dfe1ee;
  font-size: 1rem;
  margin-left: 10px;
`;

// Buttons goes under this line

export const NavMenu = styled.ul`
  display: flex;
  line-height: 70px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background-color: #2b51d8;
    padding-top: 2.5rem;
  } ;
`;

export const NavMenuItem = styled.li`
  margin-right: 40px;
  width: max-content;

  @media (max-width: 768px) {
    padding: 10px 18px;
    font-size: 2em;
  }
`;

export const NavMenuLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 300;
  &:hover {
    background-color: #a71226;
    padding: 8px 12px;
    border-radius: 6px;
    transition: 0.5s;
  }
`;
