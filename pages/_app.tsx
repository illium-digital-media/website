import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import MainNavigation from "@/components/Navigation/MainNavigation";
import { DarkModeProvider } from "../components/DarkModeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DarkModeProvider>
        <MainNavigation />
        <Component {...pageProps} />
        <Footer />
      </DarkModeProvider>
    </>
  );
}
