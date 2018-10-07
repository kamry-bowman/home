import styled from 'styled-components';
import sizes from '../data/sizes';

const Header = styled.div`
  h1 {
    font-size: 8.4rem;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5%;
    
    @media (max-width: ${sizes.tablet}) {
      font-size: 7.4rem;
      margin-left: 0;
    }

    @media (max-width: ${sizes.mobile}) {
      font-size: 6.4rem;
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
      font-size: 4.8rem;
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

    &.active {
      color: white;
      background-color: black;
      font-size: 5rem;
      padding: 3rem;
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
