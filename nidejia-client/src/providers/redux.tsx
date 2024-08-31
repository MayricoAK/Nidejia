"use client"
import { store } from "@/lib/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

function ReduxProvider({children}: { children: React.ReactNode}) {
  return(
    <SessionProvider>
      <Provider store={store}>{children}</Provider>;
    </SessionProvider>
  );
}

export default ReduxProvider;