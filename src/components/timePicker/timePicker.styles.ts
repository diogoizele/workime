import { StyleSheet, Platform } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Text } from "react-native-paper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "styles";

export const Container = styled.View``;

export const FieldContainer = styled(TouchableOpacity)`
  height: ${RFValue(32)}px;
  width: ${RFValue(54)}px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(8)}px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const TimeField = styled(Text)`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.primary};
`;

export const Label = styled(Text)`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: ${RFValue(4)}px;
`;

interface SelectedHour {
  isSelectedHour: boolean;
}

export const TimePickerPressable = styled(TouchableOpacity)<SelectedHour>`
  align-items: center;

  background-color: ${({ theme, isSelectedHour }) =>
    isSelectedHour ? theme.colors.primary : "transparent"};

  width: ${RFValue(54)}px;
  margin-vertical: ${RFValue(4)}px;
  border-radius: ${RFValue(8)}px;
`;

export const TimePickerText = styled(Text)<SelectedHour>`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, isSelectedHour }) =>
    isSelectedHour ? theme.colors.white : theme.colors.primary};
`;

export const SwipeableContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 50%;
`;

export const StyledGestureHandlerRootView = styled(GestureHandlerRootView)`
  flex: 1;
  flex-direction: row;
`;

export const StyledTouchableWithoutFeedback = styled(TouchableWithoutFeedback)`
  flex: 1;
  flex-direction: row;
`;

export const TimeInputField = styled(TextInput)`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: center;
  text-align: center;

  height: 100%;

  width: 45%;
`;

export const TimeTextInput = styled.TextInput`
  height: 100%;

  flex: 1;

  border-radius: ${RFValue(8)}px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.primary};

  text-align: center;
`;

export const styles = StyleSheet.create({
  modal: {
    marginHorizontal: 24,
    paddingHorizontal: RFValue(16),
    height: RFValue(140),
    backgroundColor: theme.colors.background,
    borderRadius: RFValue(8),
  },
  timeSelectContent: {
    paddingTop: RFValue(140 / 2 - (Platform.OS === "ios" ? 22 : 25)),
    paddingBottom: RFValue(140 / 2 - (Platform.OS === "ios" ? 22 : 25)),
    alignItems: "center",
  },
  shadowInput: {
    width: RFValue(54),
    height: RFValue(32),
    borderRadius: RFValue(8),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: RFValue(4),
  },
});
