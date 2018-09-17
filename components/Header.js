import styled from 'styled-components';

const Header = styled.div`
  font-family: 'Archivo Black', sans-serif;
  h1 {
    font-size: 8.4rem;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5%;
  }
  h2 {
    font-size: 4.6rem;
    padding-left: 15px;
    padding-right: 15px;
  }
  a {
    font-size: 4rem;
    padding: 1.8rem;
    color: black;
    border: 3px solid black;
    text-decoration: none;
  }

`;

export default (props) => {
  const { children, ...rest } = props;
  return (
    <Header>
      { typeof children === 'function' ? children(rest) : children }
    </Header>
  );
};
