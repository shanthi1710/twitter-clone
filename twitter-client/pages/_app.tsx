import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Inter, Quicksand } from "next/font/google";
import {Toaster} from 'react-hot-toast'
const quicksand = Quicksand({ subsets: ["latin"], weight: "400" });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={quicksand.className}>
       <GoogleOAuthProvider clientId="990382978633-05e8posupjf06ttbs3b30jujvark8i5p.apps.googleusercontent.com">
          <Component {...pageProps} />
          <Toaster/>
       </GoogleOAuthProvider>
    </div>
  );
}
