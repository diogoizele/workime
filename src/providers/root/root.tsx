import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "styled-components";

import type { RootProps } from "./root.types";
import { StyleSheet } from "react-native";
import theme from "styles/theme/theme";

export const RootAppProvider = ({ children }: RootProps) => {
  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            <PaperProvider>
              {/* <SafeAreaView style={styles.container}> */}
              {children}
              {/* </SafeAreaView> */}
            </PaperProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
