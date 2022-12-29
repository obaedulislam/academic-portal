import { Inter } from "@next/font/google";
import Head from "next/head";
import Header from "../Components/Header/Header";
import Banner from "./Home/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header></Header>
      <div className="mt-12">
        <Banner />
      </div>
    </div>
  );
}
