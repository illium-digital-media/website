import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@/components/Footer";
import MainNavigation from "@/components/Navigation/MainNavigation";
import ProgressBar from "@/components/ProgressBar";
import useLoadGAOnUserInteraction from "@/hooks/useLoadGAOnUserInteraction";
import Script from "next/script";
import { Exo_2 } from 'next/font/google';

// const exo_2 = Exo_2({ weight: ['400', '700'], subsets: ['latin'], display: 'swap'})
export default function App({ Component, pageProps }: AppProps) {
  const loadGA = useLoadGAOnUserInteraction();

  return (
    // <main className={exo_2.className}>
    <main>

       {loadGA && (
        <>
          <Script
            id="gtm-script"
            src="https://www.googletagmanager.com/gtag/js?id=G-Z2XTG8XXNS"
          />
          <Script
            id="gtm-script"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-Z2XTG8XXNS');
              `,
            }}
          />
        </>
      )}
        <MainNavigation />
        <ProgressBar/>
        <Component {...pageProps} />
        <Footer />
    </main>
  );
}
