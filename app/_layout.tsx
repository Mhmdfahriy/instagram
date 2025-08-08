<<<<<<< HEAD
import { Stack } from "expo-router";

export default function RootLayout() {
    return <Stack screenOptions={{ headerShown: false }} />;
}
=======
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

export default function Layout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryClientProvider>
  );
}
>>>>>>> a1e319f (update)
