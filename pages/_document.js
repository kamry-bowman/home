import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            property="og:image"
            content="//kamrybowman.com/static/kam-avi.png"
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
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
