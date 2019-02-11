import React from 'react';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import shortid from 'shortid';
import Layout from '../components/Layout';
import HeaderRow from '../components/HeaderRow';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaIcon from '../components/MediaIcon';
import skillArr from '../data/skills';
import sizes from '../data/sizes';
import MainImage from '../components/MainImage';

const dropIn = keyframes`
  0% {
    transform: translatey(-100vh);
  }
  100% {
    transform: none;
  }
`;

const hide = keyframes`
  0% {
    visibility: hidden;
  }
  100% {
    visibility: initial;
  }
  `;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    visibility: initial;
    opacity: 1;
  }
`;

const HomePage = styled.div`
  .main-head {
    visibility: hidden;
    animation: ${fadeIn} 1s ease-out 0.3s forwards;
  }
  .main-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    padding-top: 40px;

    @media (max-width: ${sizes.mobile}) {
      padding-left: 4px;
      padding-right: 4px;
    }

    & > div {
      width: 49%;

      @media (max-width: ${sizes.tablet}) {
        width: 100%;
        margin-bottom: 60px;
      }
    }
  }
  .main-img {
    animation: ${dropIn} 0.5s cubic-bezier(0.46, 1.68, 0.68, 0.33);
    img {
      width: 100%;
    }
  }
  .main-txt {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    visibility: hidden;
    font-family: 'Nova Flat', 'sans serif';
    animation: ${hide} 0.3s;
    animation: ${fadeIn} 0.6s ease-out 0.3s forwards;
    h3 {
      font-size: 3.8rem;
    }
    li {
      font-size: 2.8rem;
    }
  }

  nav {
    margin-top: 50px;
  }
`;

export default () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Kamry Bowman</title>
    </Head>
    <HomePage>
      <Header delay=".2s">
        {({ delay }) => (
          <React.Fragment>
            <h1 className="main-head">
              <a href="/">Kamry Bowman</a>
            </h1>
            <HeaderRow titleMorph="left" delay={delay}>
              <h2>Web Development</h2>
            </HeaderRow>
            <div className="main-content">
              <div className="main-img">
                <MainImage />
              </div>
              <div className="main-txt">
                <h3>I build websites with</h3>
                <ul>
                  {skillArr.map((skill, id) => (
                    <li key={shortid.generate()}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <nav>
              <HeaderRow barRight delay={delay}>
                <Link href="/portfolio">
                  <a>Portfolio</a>
                </Link>
              </HeaderRow>
              <HeaderRow delay={delay}>
                <a href="https://glitteringglobofwisdom.com">Blog</a>
              </HeaderRow>
              <HeaderRow barRight delay={delay}>
                <Link href="/about-me">
                  <a>About Me</a>
                </Link>
              </HeaderRow>
            </nav>
          </React.Fragment>
        )}
      </Header>

      <Footer>
        <div className="social-box">
          <MediaIcon
            imgsrc="/static/github.svg"
            target="https://github.com/kamry-bowman"
          />
          <MediaIcon
            imgsrc="/static/twitter.svg"
            target="https://twitter.com/MispelledToyota"
          />
          <MediaIcon
            imgsrc="/static/linkedin.svg"
            target="https://linkedin.com/in/kamry-bowman"
          />
        </div>
        <div className="copyright">
          <p>Copyright 2018 Kam Bowman</p>
        </div>
      </Footer>
    </HomePage>
  </Layout>
);
