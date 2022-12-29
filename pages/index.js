import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Banner from "./Home/banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="mt-12">
        <Banner></Banner>
      </div>
    </div>
  );
}
