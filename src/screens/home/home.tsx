import { Keyboard, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useTheme } from "styled-components";

import { Text, TimePicker } from "components";

import { Header, HeaderTitles, Title, styles } from "./home.styles";

export const Home = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        containerStyle={styles.touchableContainer}
        onPress={Keyboard.dismiss}
      >
        <Header>
          <HeaderTitles>
            <Title>Workime</Title>
            <Text color={colors.primary} fontSize={16} variant="displayMedium">
              Calculadora de horas trabalhadas
            </Text>
          </HeaderTitles>
          <TimePicker label="Carga horária esperada" limitHour={11} />
        </Header>
      </TouchableWithoutFeedback>
    </View>
  );
};
