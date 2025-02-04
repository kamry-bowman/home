import styled from 'styled-components';
import Image from "next/image";

const MediaIcon = styled.div`
  width: 50px;
  height: 50px;

  img {
    width: 100%;
  }
`;

export default function MediaIconComponent(props) {
  return (
    <MediaIcon>
      <a href={props.target}>
        <Image src={props.imgsrc} alt={""}/>
      </a>
    </MediaIcon>
  );
}