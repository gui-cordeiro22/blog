// Dependencies
import { ReactNode } from "react";

export type NavbarData = {
  logo: string;
};

export type NavbarElement = {
  linksCompositions: ReactNode;
};

export type NavbarProps = NavbarData & NavbarElement;
