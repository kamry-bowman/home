import styled, { keyframes } from 'styled-components';
import React from 'react';


const wait = (fromRight = false) => {
  return keyframes`
    from {
      transform: translate(${!fromRight && '-'}75vw);
    }
    
    to {
      transform: translate(${!fromRight && '-'}75vw);
    }
    `;
};

const slide = (fromRight = false) => {
  return keyframes`
    0% {
      transform: translate(${!fromRight && '-'}75vw);
    }`;
};

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  max-width: 75%;
  margin: ${props => (props.barRight ? '10px 0 10px auto' : '10px auto 10px 0')};
  min-height: 60px;
  vertical-align: middle;
  animation-name: ${props => (
    `${
      props.delay
        ? `${wait(Boolean(props.barRight))}, `
        : null
    }${slide(Boolean(props.barRight))};
    `)};
  animation-duration: ${props => (
    `${props.delay ? (`${props.delay}, `) : null}1s`
  )};
  animation-delay: ${props => (props.delay ? `0s, ${props.delay}` : '0s')};
  animation-fill-mode: forwards;

  .blackBar {
    order: ${props => (props.barRight ? null : -1)};
    height: 26px;
    flex-grow: 1;
    background-color: black;
  }

  a {
    padding: 0 2rem;
  }
`;

export default ({
  barRight, delay = 0, children, ...rest
}) => (
  <HeaderRow barRight={Boolean(barRight)} delay={delay}>
    {typeof children === 'function' ? children({ barRight, ...rest }) : children}
    <div className="blackBar" />
  </HeaderRow>
);
