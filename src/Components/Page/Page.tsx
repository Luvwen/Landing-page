import React, { FunctionComponent } from "react";
import GlobalStyle from "./styles/globalstyle";

import { Navbar } from "../Navbar";
import { Headline } from "../Headline";
import { Main } from "../Main";
import { BottomMain } from "../Bottom-main";
import { Download } from "../Download";
import { Footer } from "../Footer";

export const Page: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Headline />
      <Main />
      <BottomMain />
      <Download />
      <Footer />
    </>
  );
};
