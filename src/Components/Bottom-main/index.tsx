import React from "react";
import {
  ContainerTools,
  ContainerWorkflow,
  Icons,
  IconsContainer,
  MiniContainer,
  SubtitleWorkflow,
  TextTools,
  TextWorkflow,
  TitleTools,
  WorkflowImg,
} from "./styles";

import blacklistImage from "../Page/assets/icon-blacklist.svg";
import iconTextImage from "../Page/assets/icon-text.svg";
import iconPreviewImage from "../Page/assets/icon-preview.svg";
import logoGoogle from "../Page/assets/logo-google.png";
import logoIbm from "../Page/assets/logo-ibm.png";
import logoMicrosoft from "../Page/assets/logo-microsoft.png";
import logoHp from "../Page/assets/logo-hp.png";
import logoVector from "../Page/assets/logo-vector-graphics.png";

export const BottomMain = () => {
  return (
    <>
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
    </>
  );
};
