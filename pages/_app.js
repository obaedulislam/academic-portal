import { SessionProvider } from "next-auth/react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/globals.css";

export default function App({ Component, pageProps, session }) {
  return (
    <>
      <SessionProvider session={session}>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </SessionProvider>
    </>
  );
}
