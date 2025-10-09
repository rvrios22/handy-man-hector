import {
  createLink,
  useRouter,
  type NavigateOptions,
  type ToOptions,
} from "@tanstack/react-router";
import { HeroUIProvider, ToastProvider } from "@heroui/react";

declare module "@react-types/shared" {
  interface RouterConfig {
    href: ToOptions["to"];
    routerOptions: Omit<NavigateOptions, keyof ToOptions>;
  }
}

function Providers({ children }: { children: React.ReactNode }) {
  let router = useRouter();
  return (
    <HeroUIProvider
      navigate={(to, options) => router.navigate({ to, ...options })}
      useHref={(to) => router.buildLocation({ to }).href}
    >
      <ToastProvider />
      {children}
    </HeroUIProvider>
  );
}

export default Providers;
