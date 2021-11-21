import React from "react";
import {
  ContainerMode,
  Header,
  IconContainer,
  IconText,
  IconTheme,
  Logo,
  NavbarContainer,
  NavMenu,
  NavMenuItem,
  NavMenuLink,
  Paragraph,
} from "./style";

import iconTheme from "../Page/assets/sun.svg";

let url = "#";

export const Navbar = () => {
  return (
    <Header>
      <NavbarContainer>
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
      </NavbarContainer>
    </Header>
  );
};
