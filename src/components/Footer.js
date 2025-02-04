import React from 'react';
import styled from 'styled-components';
import sizes from '@/data/sizes';
import MediaIcon from "@/components/MediaIcon";
import gitHubImg from "../../public/github.svg";
import twitterImg from "../../public/twitter.svg";
import linkedInImg from "../../public/linkedin.svg";


const Footer = styled.div`
  width: 100%;
  max-width: 850px;
  margin: 120px auto 0;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: arial, 'sans serif';
  padding: 25px;

  @media (max-width: ${sizes.mobile}) {
    margin-top: 0;
  }
  .social-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 30px 0 30px;
  }
  .copyright {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    p {
    }
  }
`;

export default function FooterComponent() {
      return (<Footer>
        <div className="social-box">
          <MediaIcon
            imgsrc={gitHubImg}
            target="https://github.com/kamry-bowman"
          />
          <MediaIcon
            imgsrc={twitterImg}
            target="https://twitter.com/MispelledToyota"
            height={50}
          />
          <MediaIcon
            imgsrc={linkedInImg}
            target="https://linkedin.com/in/kamry-bowman"
          />
        </div>
        <div className="copyright">
          <p>Copyright 2025 Kamry Bowman</p>
        </div>
      </Footer>
      )
};
