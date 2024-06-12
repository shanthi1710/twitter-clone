import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {Inter,Quicksand} from "next/font/google";
  
const quicksand = Quicksand({subsets: ["latin"], weight: "400"});
export default function App({ Component, pageProps }: AppProps) {
  return  <div className={quicksand.className}><Component {...pageProps} /></div>;
}
  