import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Exo 2:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/logo-short-dark.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/logo-short-light.ico" media="(prefers-color-scheme: dark)" />
      </Head>
      <body className='bg-primary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
