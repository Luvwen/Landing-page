import React, { FunctionComponent } from "react";
import GlobalStyle from "./styles/globalstyle";

import {
  ComputerImage,
  Container,
  ContainerImage,
  ContainerItems,
  ContainerMode,
  Header,
  IconContainer,
  IconText,
  IconTheme,
  ImageItems,
  ImageSubtitle,
  ImageText,
  Link,
  LinkContainer,
  Logo,
  LogoContainer,
  LogoImg,
  Navbar,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  Paragraph,
  Subtitle,
  SubtitleContainer,
  SubtitleText,
  Title,
  TitleText,
} from "./styles";

import iconTheme from "./images/sun.svg";
import logo from "./images/logo.jpg";
import computerImage from "./images/image-computer.png";

let url = "#";

export const Page: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Header>
        <Navbar>
          <ContainerMode>
            <Paragraph>
              <Logo href={url}>Luvwen</Logo>
            </Paragraph>
            <IconContainer>
              <IconTheme src={iconTheme}></IconTheme>
              <IconText>Light Mode</IconText>
            </IconContainer>
          </ContainerMode>
          <NavMenu>
            <NavMenuItem>
              <NavMenuLink href={url}>Home</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink href={url}>Features</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink href={url}>Clipboards</NavMenuLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuLink href={url}>About us</NavMenuLink>
            </NavMenuItem>
          </NavMenu>
        </Navbar>
      </Header>
      <LogoContainer>
        <LogoImg src={logo} width="125px" heigth="125px" />
      </LogoContainer>
      <Container>
        <ContainerItems>
          <Title>A history of everything you copy</Title>
          <TitleText>
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </TitleText>
          <LinkContainer>
            <Paragraph>
              <Link variant="ios">Download for iOS</Link>
            </Paragraph>
            <Paragraph>
              <Link>Download for Mac</Link>
            </Paragraph>
          </LinkContainer>
        </ContainerItems>
      </Container>
      <SubtitleContainer>
        <Subtitle>Keep track of your snippets</Subtitle>
        <SubtitleText>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </SubtitleText>
      </SubtitleContainer>
      <ContainerImage>
        <ComputerImage src={computerImage} />
        <ImageItems>
          <ImageSubtitle>Quick Search</ImageSubtitle>
          <ImageText>
            Easily search your snippets by content, category, web address,
            application, and more.
          </ImageText>
          <ImageSubtitle>iCloud Sync</ImageSubtitle>
          <ImageText>
            Instantly saves and syncs snippets across all your devices.
          </ImageText>
          <ImageSubtitle>Complete History</ImageSubtitle>
          <ImageText>
            Retrieve any snippets from the first moment you started using the
            app.
          </ImageText>
        </ImageItems>
      </ContainerImage>
    </>
  );
};
