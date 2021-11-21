import styled from "styled-components";

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
