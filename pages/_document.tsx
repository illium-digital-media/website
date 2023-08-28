import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head><link href="https://fonts.googleapis.com/css2?family=Exo 2:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <body className='bg-primary'>
        <div id="tint"></div>
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
