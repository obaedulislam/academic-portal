import { Inter } from "@next/font/google";
import Head from "next/head";
import Banner from "./Home/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <div className="">
        <Banner />
      </div>
    </div>
  );
}
