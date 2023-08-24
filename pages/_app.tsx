import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import MainNavigation from "@/components/Navigation/MainNavigation";
import { Provider } from 'react-redux';
import store from '../store/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <MainNavigation />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </>
  );
}
