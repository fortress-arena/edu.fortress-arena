import '../styles/globals.css';
import '../public/fonts/style.css';
import Head from 'next/head';
import { NextUIProvider } from "@nextui-org/react"
import {SSRProvider} from '@react-aria/ssr';



export default function App({ Component, pageProps }) {
  return (
      <NextUIProvider> 
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="shortcut icon" href="../public/favicon.ico" />
        </Head>
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </NextUIProvider>
  ) 
}
