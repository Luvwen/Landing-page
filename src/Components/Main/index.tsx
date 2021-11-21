import React from "react";
import {
  ClipboardContainer,
  ClipboardImage,
  ComputerImage,
  ContainerImage,
  ImageItems,
  ImageSubtitle,
  ImageText,
  Subtitle,
  SubtitleContainer,
  SubtitleText,
  TextImage,
  TitleImage,
} from "./styles";

import computerImage from "../Page/assets/image-computer.png";
import clipboardImage from "../Page/assets/image-devices.png";

export const Main = () => {
  return (
    <>
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
    </>
  );
};
