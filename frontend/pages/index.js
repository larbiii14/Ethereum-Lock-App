import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "../styles/Home.module.css";
import EtherWallet from "../components/EtherWallet";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ether Wallet</title>
        <meta name="description" content="Crud contracat" />
      </Head>
      <Header />
      <EtherWallet />
      <Footer />
    </div>
  );
}
