import styled from 'styled-components';
import sizes from '../data/sizes';

const Header = styled.div`
  font-family: 'Archivo Black', sans-serif;
  h1 {
    font-size: 8.4rem;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5%;
    
    @media (max-width: ${sizes.tablet}) {
      font-size: 7.4rem;
      margin-left: 0;
    }

  }

  h2 {
    font-size: 4.6rem;
    padding-left: 15px;
    padding-right: 15px;
    
    @media(max-width: ${sizes.tablet}) {
      padding-left: 2%;
      padding-right: 0;
      font-size: 6.2rem;
    }
    
    @media(max-width: ${sizes.mobile}) {
      padding-left: 0;
      text-align: end;
    }

  }

  a {
    font-size: 4rem;
    padding: 1.8rem;
    color: black;
    border: 3px solid black;
    text-decoration: none;
    text-align: center;

    @media (max-width: ${sizes.mobile}) {
      width: 80%;
    }

    &:hover {
      color: white;
      background-color: black;
    }

    &:visited {
      color: darkslategray;
    }
  }

`;

export default (props) => {
  const { children, theme, ...rest } = props;
  return (
    <Header theme={theme} >
      { typeof children === 'function' ? children(rest) : children }
    </Header>
  );
};
