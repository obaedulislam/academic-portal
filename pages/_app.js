import { SessionProvider } from "next-auth/react";
import Footer from "../Components/Footer/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps, session }) {
  return (
    <div>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Footer></Footer>
      </SessionProvider>
    </div>
  );
}
