import { TextProps as PaperTextProps } from "react-native-paper";

export interface TextProps extends PaperTextProps {
  children: React.ReactNode;

  fontSize?: number;
  color?: string;
}

type TextVariant = Exclude<PaperTextProps["variant"], undefined>;

export type FontStyleObject = Record<TextVariant, string>;
