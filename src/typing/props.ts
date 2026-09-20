import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ImgHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
  RefObject,
  SelectHTMLAttributes,
} from "react";

export type SectionId = "about_us" | "why_us" | "contact" | "services";

export interface ChildrenProp {
  children: ReactNode;
}

export interface NavLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export interface NavListProps {
  active: boolean;
  onNavigate?: () => void;
}

export interface MenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export interface ReferenceProp {
  reference: RefObject<HTMLElement>;
}

export interface HeaderProps extends ReferenceProp {}

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export interface ImageData {
  src: string;
  alt: string;
}

export interface ServiceCardData {
  eyebrow: string;
  title: string;
  description: string;
  image: ImageData;
}

export interface LabelInputProps extends LabelHTMLAttributes<HTMLLabelElement> {
  id: string;
  children: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  inputValid: boolean;
  inputError: boolean;
}

export type InputFormProps = Omit<InputProps, "inputValid" | "inputError"> & {
  label: string;
  error: string;
  touched: boolean;
};

export interface FormikHandlerParams {
  field: string;
  value?: string;
}
export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  id: string;
  value: string;
  error: string;
  label: string;
  touched: boolean;
  handleManualTouched: (data: FormikHandlerParams) => void;
  handleManualError: (data: FormikHandlerParams) => void;
  handleManualValues: (data: FormikHandlerParams) => void;
}
