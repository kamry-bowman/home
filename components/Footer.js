import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  max-width: 850px;
  height: 160px;
  margin: 0 auto;
  background-color: black;
`;

export default ({ children }) => (
  <Footer>
    {children}
  </Footer>
);
