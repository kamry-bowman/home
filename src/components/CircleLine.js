import React from 'react';
import styled from 'styled-components';

const CircleLine = styled.div`
  height: ${props => props.height || '40px'};
  width: ${props => (props.cols ? `${20 * props.cols}px` : '20px')};
  background-image: url('/black-circle.svg');
  margin: 0 auto;
`;

export default CircleLine;