import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preload" href="/path/to/resource" as="font" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
