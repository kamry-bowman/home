import styled from 'styled-components';

const MediaIcon = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
  }
`;

export default props => (
  <MediaIcon>
    <a href={props.target}>
      <img src={props.imgsrc}/>
    </a>
  </MediaIcon>
);