import { Text as PaperText } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";

import type { FontStyleObject, TextProps } from "./text.types";

const fontStyles: FontStyleObject = {
  bodyLarge: "Inter_400Regular",
  bodyMedium: "Inter_400Regular",
  bodySmall: "Inter_400Regular",
  displayLarge: "Inter_700Bold",
  displayMedium: "Inter_500Bold",
  displaySmall: "Inter_400Bold",
  titleLarge: "Inter_700Bold",
  titleMedium: "Inter_700Bold",
  titleSmall: "Inter_700Bold",
  headlineLarge: "Inter_700Bold",
  headlineMedium: "Inter_500Medium",
  headlineSmall: "Inter_400Regular",
  labelLarge: "Inter_400Medium",
  labelMedium: "Inter_400Medium",
  labelSmall: "Inter_400Medium",
};

export const Text = ({
  children,
  fontSize = 16,
  color = "text_dark",
  variant = "bodyMedium",
  ...props
}: TextProps) => {
  const textStyle = {
    fontFamily: fontStyles[variant],
    fontSize: RFValue(fontSize),
    color,
  };

  return (
    <PaperText style={textStyle} {...props}>
      {children}
    </PaperText>
  );
};
