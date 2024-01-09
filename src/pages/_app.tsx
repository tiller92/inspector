import { type AppType } from "next/dist/shared/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "till/styles/globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
