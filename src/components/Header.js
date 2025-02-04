import styled from 'styled-components';
import sizes from '@/data/sizes';

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
      margin-left: 0;
      font-size: 6.4rem;
    }
  }

  h2 {
    font-size: 6.6rem;
    padding-left: 15px;
    padding-right: 15px;
    border-left: 8px solid black;

    @media (max-width: ${sizes.tablet}) {
      padding-left: 2%;
      padding-right: 0;
      font-size: 6.2rem;
    }

    @media (max-width: ${sizes.mobile}) {
      padding-left: 2px;
      padding-right: 2px;
      text-align: end;
      font-size: 4.2rem;
      border-left: none;
    }
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default props => {
  const { children, theme, ...rest } = props;
  return (
    <Header theme={theme}>
      {typeof children === 'function' ? children(rest) : children}
    </Header>
  );
};
