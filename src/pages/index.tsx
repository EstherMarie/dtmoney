import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";
import { CardSection } from "../components/CardSection";
import { Listagem } from "../components/Listagem";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dt money</title>
        <meta
          name="description"
          content="fassa adiministrsaum du çell denheiru"
        />
        <meta name="robots" content="noindex"></meta>
      </Head>

      <Header />
      <main>
        <CardSection />
        <Listagem />
      </main>
    </>
  );
};

export default Home;
