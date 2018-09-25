import styled, { keyframes } from 'styled-components';
import React from 'react';
import sizes from '../data/sizes';

const wait = (fromRight = false) => {
  return keyframes`
    from {
      transform: translate(${!fromRight && '-'}100vw);
    }
    
    to {
      transform: translate(${!fromRight && '-'}100vw);
    }
    `;
};

const slide = (fromRight = false) => {
  return keyframes`
    0% {
      transform: translate(${!fromRight && '-'}100vw);
    }
    100% {
      transform: none;
    }
    `;
};

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  max-width: 75%;
  margin: ${props => (props.barRight ? '10px 0 10px auto' : '10px auto 10px 0')};
  min-height: 60px;
  vertical-align: middle;
  animation-name: ${props => `${props.delay ? `${wait(Boolean(props.barRight))}, ` : null}${slide(Boolean(props.barRight))};
    `};
  animation-duration: ${props => `${props.delay ? `${props.delay}, ` : null}1.2s`};
  animation-delay: ${props => (props.delay ? `0s, ${props.delay}` : '0s')};
  animation-fill-mode: forwards;

  @media(max-width: ${sizes.tablet}) {
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: ${props => (props.titleMorph ? '100%' : '98%')};
  }

  @media(max-width: ${sizes.mobile}) {
    width: ${props => (props.titleMorph ? '100%;' : null)};
    justify-content: ${props => (props.titleMorph ? 'flex-end;' : null)};
    margin-right: ${props => (props.titleMorph ? '0;' : null)};
  }

  .blackBar {
    order: ${props => (props.barRight ? null : -1)};
    height: 26px;
    flex-grow: 1;
    background-color: black;
    min-width: 80px;

    @media(max-width: ${sizes.tablet}) {
      height: 18px;
    }
    
    @media(max-width: ${sizes.mobile}) {
      display: ${props => (props.titleMorph ? 'none;' : null)};
  }

  a {
    padding: 0 2rem;
  }
`;

export default ({
  barRight, delay = 0, titleMorph, children, ...rest
}) => (
  <HeaderRow barRight={Boolean(barRight)} delay={delay} titleMorph={titleMorph}>
    {typeof children === 'function' ? children({ barRight, ...rest }) : children}
    <div className="blackBar" />
  </HeaderRow>
);
