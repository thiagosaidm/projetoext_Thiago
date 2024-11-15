
import "../styles/global.css"
import { Slot, Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
          headerShown: false
     }
    }>
      
    <Stack.Screen name="posicoes" options={{
      presentation: 'fullScreenModal'
    }} />


    </Stack>




  );
}
