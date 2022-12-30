import { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {CssBaseline.flush()}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HXXKC8NR30"
          strategy="afterInteractive"
          />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-HXXKC8NR30');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
