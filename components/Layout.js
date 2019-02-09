import { injectGlobal } from 'styled-components';

injectGlobal`
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
    font-family: 'Archivo Black', sans-serif;
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
`;

export default ({ children, ...rest }) => {
  return typeof children === 'function' ? children(rest) : children;
};
