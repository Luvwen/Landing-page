import React, { FunctionComponent } from "react";
import GlobalStyle from "./styles/globalstyle";

import {
  BottomButtons,
  BottomContainer,
  BottomSubtitle,
  BottomText,
  ClipboardContainer,
  ClipboardImage,
  ComputerImage,
  Container,
  ContainerImage,
  ContainerItems,
  ContainerMode,
  ContainerTools,
  ContainerWorkflow,
  Footer,
  FooterContainer,
  FooterIconsContainer,
  FooterLink,
  FooterLinkImg,
  FooterLinks,
  FooterLogo,
  FooterTextContainer,
  Header,
  IconContainer,
  Icons,
  IconsContainer,
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
  MiniContainer,
  Navbar,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  Paragraph,
  Subtitle,
  SubtitleContainer,
  SubtitleText,
  SubtitleWorkflow,
  TextImage,
  TextTools,
  TextWorkflow,
  Title,
  TitleImage,
  TitleText,
  TitleTools,
  WorkflowImg,
} from "./styles";

import iconTheme from "./images/sun.svg";
import logo from "./images/logo.jpg";
import computerImage from "./images/image-computer.png";
import clipboardImage from "./images/image-devices.png";
import blacklistImage from "./images/icon-blacklist.svg";
import iconTextImage from "./images/icon-text.svg";
import iconPreviewImage from "./images/icon-preview.svg";
import logoGoogle from "./images/logo-google.png";
import logoIbm from "./images/logo-ibm.png";
import logoMicrosoft from "./images/logo-microsoft.png";
import logoHp from "./images/logo-hp.png";
import logoVector from "./images/logo-vector-graphics.png";
import iconFacebook from "./images/icon-facebook.svg";
import iconTwitter from "./images/icon-twitter.svg";
import iconInstagram from "./images/icon-instagram.svg";

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
      <ClipboardContainer>
        <TitleImage>Access Clipboard anywhere</TitleImage>
        <TextImage>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </TextImage>
        <ClipboardImage src={clipboardImage} />
      </ClipboardContainer>
      <ContainerTools>
        <TitleTools>Supercharge your workflow</TitleTools>
        <TextTools>We’ve got the tools to boost your productivity.</TextTools>
        <ContainerWorkflow>
          <MiniContainer>
            <WorkflowImg src={blacklistImage} />
            <SubtitleWorkflow>Create blacklists</SubtitleWorkflow>
            <TextWorkflow>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </TextWorkflow>
          </MiniContainer>
          <MiniContainer>
            <WorkflowImg src={iconTextImage} />
            <SubtitleWorkflow>Plain text snippets</SubtitleWorkflow>
            <TextWorkflow>
              Remove unwanted formatting from copied text for a consistent look.
            </TextWorkflow>
          </MiniContainer>
          <MiniContainer>
            <WorkflowImg src={iconPreviewImage} />
            <SubtitleWorkflow>Sneak preview</SubtitleWorkflow>
            <TextWorkflow>
              Quick preview of all snippets on your Clipboard for easy access.
            </TextWorkflow>
          </MiniContainer>
        </ContainerWorkflow>
      </ContainerTools>
      <IconsContainer>
        <Icons src={logoGoogle} />
        <Icons src={logoIbm} />
        <Icons src={logoMicrosoft} />
        <Icons src={logoHp} />
        <Icons src={logoVector} />
      </IconsContainer>
      <BottomContainer>
        <BottomSubtitle>Clipboard for iOS and Mac OS</BottomSubtitle>
        <BottomText>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </BottomText>
        <BottomButtons>
          <Paragraph>
            <Link variant="ios">Download for iOS</Link>
          </Paragraph>
          <Paragraph>
            <Link>Download for Mac</Link>
          </Paragraph>
        </BottomButtons>
      </BottomContainer>
      <Footer>
        <FooterLogo src={logo} width="50px" height="50px" />
        <FooterContainer>
          <FooterTextContainer>
            <Paragraph>
              <FooterLinks>FAQs</FooterLinks>
            </Paragraph>
            <Paragraph>
              <FooterLinks>Contact Us</FooterLinks>
            </Paragraph>
          </FooterTextContainer>
          <FooterTextContainer>
            <Paragraph>
              <FooterLinks>Privacy Policy</FooterLinks>
            </Paragraph>
            <Paragraph>
              <FooterLinks>Press Kit</FooterLinks>
            </Paragraph>
          </FooterTextContainer>
          <FooterTextContainer>
            <Paragraph>
              <FooterLinks>Install Guide</FooterLinks>
            </Paragraph>
          </FooterTextContainer>
        </FooterContainer>
        <FooterIconsContainer>
          <FooterLink href={url}>
            <FooterLinkImg src={iconFacebook} />
          </FooterLink>
          <FooterLink href={url}>
            <FooterLinkImg src={iconTwitter} />
          </FooterLink>
          <FooterLink href={url}>
            <FooterLinkImg src={iconInstagram} />
          </FooterLink>
        </FooterIconsContainer>
      </Footer>
    </>
  );
};
