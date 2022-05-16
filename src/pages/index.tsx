import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header } from "../styles/Home";
import { Card } from "../components/Card";

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

      <Header>
        <div className="container">
          <div className="logo">
            <Image
              src="/icons/Logo.svg"
              alt=""
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          <button type="button" className="button">
            Nova transação
          </button>
        </div>
      </Header>
      <main>
        <Card />
      </main>
    </>
  );
};

export default Home;
