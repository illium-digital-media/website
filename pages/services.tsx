import CommonLanding from "@/components/sections/CommonLanding";
import Head from "next/head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to our painting and decorating site"
        />
      </Head>
      <CommonLanding heading={"Services"} />

    </>
  );
};

export default HomePage;
