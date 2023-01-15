import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { RootAppProvider } from "providers";
import { Home } from "screens";

export default function App() {
  const [loadingFonts] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!loadingFonts) return null;

  return (
    <RootAppProvider>
      <Home />
      <StatusBar style="inverted" translucent />
    </RootAppProvider>
  );
}
