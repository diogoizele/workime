import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Text } from "react-native-paper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableContainer: {
    flex: 1,
  },
});

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(36)}px;

  justify-content: space-around;

  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${RFValue(16)}px;

  padding-top: ${getStatusBarHeight() + RFValue(48)}px;
`;

export const HeaderTitles = styled.View`
  justify-content: space-between;
`;

export const Title = styled(Text).attrs({ type: "title" })`
  color: ${({ theme }) => theme.colors.white};

  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.bold};

  margin-bottom: ${RFValue(2)}px;
`;
