import React from "react";
import { Link } from "../Headline/styles";
import { Paragraph } from "../Navbar/style";
import {
  BottomButtons,
  BottomContainer,
  BottomSubtitle,
  BottomText,
} from "./styles";

export const Download = () => {
  return (
    <>
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
    </>
  );
};
