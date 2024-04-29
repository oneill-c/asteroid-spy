import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LiveView"
        options={{
          headerTitle: "Eyes on Asteroids",
          presentation: "modal",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
