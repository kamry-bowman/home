import styled from 'styled-components';
import React from 'react';

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  max-width: 75%;
  margin: ${props => (props.barRight ? '10px 0 10px auto' : '10px auto 10px 0')};
  min-height: 60px;
  vertical-align: middle;

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
