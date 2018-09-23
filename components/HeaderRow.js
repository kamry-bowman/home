import styled, { keyframes } from 'styled-components';
import React from 'react';

const fallFromLeft = keyframes`
  0% {
    transform: rotate(-90deg);
    transform-origin: left;
  }`;

const fallFromRight = keyframes`
  0% {
    transform: rotate(90deg);
    transform-origin: right;
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  max-width: 75%;
  margin: ${props => (props.barRight ? '10px 0 10px auto' : '10px auto 10px 0')};
  min-height: 60px;
  vertical-align: middle;
  animation: ${props => (props.barRight ? `${fallFromRight} .4s forwards` : `${fallFromLeft} .4s forwards`)};

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

export default ({ barRight, children, ...rest }) => (
  <HeaderRow barRight={!!barRight} >
    { typeof children === 'function' ? children({ barRight, ...rest }) : children }
    <div className="blackBar"/>
  </HeaderRow>
);
