import { ReactNode, RefObject } from "react";
import type { HTMLAttributes } from "react";

export interface ChildrenProp {
  children: ReactNode | ReactNode[];
}

export interface NavLinkProps extends HTMLAttributes<HTMLElement> {
  section: "about_us" | "why_us" | "contact" | "services";
}

export interface NavListProps {
  active: boolean;
}

export interface TitleProps extends HTMLAttributes<HTMLElement> {}

export interface ReferenceProp {
  reference: RefObject<HTMLElement>;
}

export interface HeaderProps extends ReferenceProp {}

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {}

export interface ServiceCardProps {
  title: string;
  image: ImageProps;
  content: string;
}

export interface ImageData {
  src: string;
  alt: string;
}

export interface ServiceCardData {
  title: string;
  image: ImageData;
  content: string;
}
