import Document, { Html, Head, Main, NextScript} from 'next/document';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  h1, h2, h3, h4 {
    margin-block-end: 0;
    margin-block-start: 0;
    inline-block-end: 0;
    inline-block-start: 0;
  }

  h1, h2, h3, h4, a {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
  }

  body {
    font-size: 1.6rem;
    /* min-width: 360px; */
  }
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
`

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Kamry Bowman" />
          <meta
            property="og:image"
            content="//kamrybowman.com/static/drawing.png"
          />
          <link
            rel="shortcut icon"
            href="static/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="static/favicon.ico" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,900"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
        <Main />
        <NextScript />
      </Html>
    );
  }
}
