import Head from "next/head";
import { Inter } from "@next/font/google";
import Banner from "./Home/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="mt-12">
        <Banner />
      </div>
    </div>
  );
}
