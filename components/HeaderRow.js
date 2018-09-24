import styled, { keyframes } from 'styled-components';
import React from 'react';

const slideFromLeft = keyframes`
  0% {
    transform: translate(-75vw);

  }`;

const slideFromRight = keyframes`
  0% {
    transform: translate(75vw);
  }
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  max-width: 75%;
  margin: ${props => (props.barRight ? '10px 0 10px auto' : '10px auto 10px 0')};
  min-height: 60px;
  vertical-align: middle;
  animation: ${props => (props.barRight ? `${slideFromRight} .4s ${props.delay} forwards` : `${slideFromLeft} .4s ${props.delay} forwards`)};

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

export default ({ barRight, delay = 0, children, ...rest }) => (
  <HeaderRow barRight={Boolean(barRight)} delay={delay}>
    { typeof children === 'function' ? children({ barRight, ...rest }) : children }
    <div className="blackBar"/>
  </HeaderRow>
);
