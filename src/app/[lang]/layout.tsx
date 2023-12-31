import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { pick } from "lodash";
import { i18n } from "../../../i18n.config";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";

import { MotionContext } from "framer-motion";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hidoyat travel - Umra safarlari",
  description: "Hidoyat travel Umra safarlari 2023 Toshkent Umra haj umraga borish",
};
export function generateStaticParams() {
  return  i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: any };
}) {
  return (
    <html lang={params.lang}>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta name="mailru-domain" content="hOJQJlsg6LPd5nGf" />
      </Head>
   
      <body className={inter.className}>{children}</body>
    </html>
  );
}
