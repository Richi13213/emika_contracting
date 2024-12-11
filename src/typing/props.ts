import { ReactNode, RefObject, FocusEvent, ChangeEvent } from "react";
import type { HTMLAttributes } from "react";
import { LabelInputStyleProps } from "@typing/styles";
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
}

export interface LabelInputProps extends ChildrenProp, LabelInputStyleProps {
  id: string;
}

export interface InputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  error: string;
  touched: boolean;
  inputValid: boolean;
  inputError: boolean;
  handleFocus: () => void;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: FocusEvent<any>) => void;
}

export type InputFormProps = Omit<
  InputProps,
  "inputValid" | "inputError" | "handleFocus"
> & {
  label: string;
};

export interface FormikHandlerParams {
  field: string;
  value?: string;
}
export interface SelectProps {
  id: string;
  value: string;
  error: string;
  label: string;
  touched: boolean;
  handleManualTouched: (data: FormikHandlerParams) => void;
  handleManualError: (data: FormikHandlerParams) => void;
  handleManualValues: (data: FormikHandlerParams) => void;
}
