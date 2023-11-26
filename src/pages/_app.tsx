import { type AppType } from "next/dist/shared/lib/utils";

import "till/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
