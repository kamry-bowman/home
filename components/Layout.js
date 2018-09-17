import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
  }
  
  * {
      margin: 0;
      padding: 0;
  }
`;

export default ({ children, ...rest }) => {
  return typeof children === 'function' ? children(rest) : children;
};
