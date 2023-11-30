import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/short-logo.ico" media="(prefers-color-scheme: dark)" />
      </Head>
      <body className="bg-primary">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
