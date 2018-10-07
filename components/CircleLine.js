import React from 'react';
import styled from 'styled-components';

const CircleLine = styled.div`
  height: ${props => props.height};
  width: 20px;
  background-image: url('/static/black-circle.svg');
  margin: 0 auto;
`;

export default ({ height }) => <CircleLine height={height} />;
