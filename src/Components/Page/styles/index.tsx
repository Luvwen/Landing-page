import styled from "styled-components";

// Header / navbar

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

export const Navbar = styled.nav`
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
  line-height: 40px;
  padding-left: 40px;
  font-size: 30px;
  text-decoration: none;
  color: white;
  font-weight: bold;
`;

export const IconContainer = styled.div`
  margin-left: 40px;
  display: flex;
  line-height: 45px;
  max-width: max-content;
`;

export const IconTheme = styled.img`
  width: 25px;
  margin-left: 15px;
`;

export const IconText = styled.p`
  color: #dfe1ee;
  font-size: 1rem;
  margin-left: 10px;
`;

// Buttons goes under this line

export const NavMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  line-height: 45px;
  list-style: none;
`;

export const NavMenuItem = styled.li`
  margin-right: 40px;
  width: max-content;
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

// here starts the main section

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

export const Link = styled.a<{ variant?: "ios" }>`
  margin-right: 25px;
  text-decoration: none;
  background: ${({ variant }) =>
    variant === "ios" ? "hsl(171, 66%, 44%)" : "hsl(233, 100%, 69%)"};
  color: white;
  padding: 10px 22px;
  border-radius: 20px;
  font-size: 14px;
`;

// subtitle container

export const SubtitleContainer = styled.div`
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 2.5em;
  font-weight: 300;
`;

export const SubtitleText = styled.p`
  margin: 20px 17% 0px 17%;
  font-size: 1.2em;
  line-height: 1.5;
  color: hsl(201, 11%, 66%);
`;

// computer images container

export const ContainerImage = styled.div`
  display: flex;
  margin-top: 10vh;
  max-width: 80%;
`;

export const ComputerImage = styled.img`
  position: relative;
  right: 5vw;
  width: 50%;
`;

export const ImageItems = styled.div`
  margin-top: 30px;
  margin-left: 60px;
`;

export const ImageSubtitle = styled.h3`
  margin-bottom: 15px;
  font-size: 1.5em;
  font-weight: 600;
`;

export const ImageText = styled.p`
  font-size: 1.2em;
  color: hsl(201, 11%, 66%);
  margin-bottom: 70px;
  line-height: 1.5;
  width: 85%;
`;

// clipboard container

export const ClipboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export const TitleImage = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 2.5em;
`;

export const TextImage = styled.p`
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
  color: hsl(201, 11%, 66%);
  font-size: 0.9em;
  margin-bottom: 50px;
  font-size: 1.2em;
`;

export const ClipboardImage = styled.img`
  height: 50vh;
  margin: 0 auto;
  width: 50%;
`;

// container tools

export const ContainerTools = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleTools = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  font-size: 2.5em;
`;

export const TextTools = styled.p`
  text-align: center;
  color: hsl(201, 11%, 66%);
  font-size: 1.2em;
`;

export const ContainerWorkflow = styled.div`
  display: flex;
  margin: 40px 200px 0px;
`;

export const MiniContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
  margin-top: 35px;
  margin-left: 20px;
`;

export const WorkflowImg = styled.img`
  width: 35px;
  height: 30px;
  margin-bottom: 20px;
`;

export const SubtitleWorkflow = styled.h3`
  margin-bottom: 20px;
`;

export const TextWorkflow = styled.p`
  color: hsl(201, 11%, 66%);
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
`;

// icons container

export const IconsContainer = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: space-evenly;
`;

export const Icons = styled.img`
  width: 100px;
  height: 35px;
`;

// bottom container

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 75px;
`;

export const BottomSubtitle = styled.h2`
  font-size: 2.5em;
`;

export const BottomText = styled.p`
  width: 33%;
  color: hsl(201, 11%, 66%);
  text-align: center;
  margin-top: 10px;
  font-size: 1.2em;
  white-space: pre-line;
  line-height: 1.5;
`;

export const BottomButtons = styled.div`
  display: flex;
  margin-top: 30px;
`;

// footer

export const Footer = styled.div`
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

export const FooterContainer = styled.div`
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
