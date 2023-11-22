import CommonLanding from "../components/sections/CommonLanding";
import Head from "next/head";

const TestimonialsPage: React.FC = () => {
  return (
    <>
      <Head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z2XTG8XXNS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-Z2XTG8XXNS');
            `
          }}
        />
        <title>Testimonials</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Testimonials"} />
    </>
  );
};

export default TestimonialsPage;
