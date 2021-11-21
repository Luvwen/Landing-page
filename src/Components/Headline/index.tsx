import React from "react";
import { Paragraph } from "../Navbar/style";
import {
  Container,
  ContainerItems,
  Link,
  LinkContainer,
  LogoContainer,
  LogoImg,
  Title,
  TitleText,
} from "./styles";

import logo from "../Page/assets/logo.jpg";

export const Headline = () => {
  return (
    <div>
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
    </div>
  );
};
