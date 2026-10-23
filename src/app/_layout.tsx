import { Stack } from "expo-router";
import { colors } from "./styles/global";

export default function RootLayout() {
  return (<Stack
            screenOptions={{
              headerStyle: { backgroundColor: colors.header},
              headerTintColor: '#fff',
            }}
            >
              <Stack.Screen name="index" options={{
                headerShown: false, title: 'Back'}}/>
              <Stack.Screen options={{title:'Tank'}} name='tank'/>
              <Stack.Screen options={{title:'Cap'}} name='cap'/>
              <Stack.Screen options={{title:'Inside'}} name='inside'/>
              <Stack.Screen options={{title:'Individuals'}} name='individuals'/>

              </Stack>
  );
}
