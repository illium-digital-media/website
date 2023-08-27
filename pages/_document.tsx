import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-primary'>
        <div id="tint"></div>
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
