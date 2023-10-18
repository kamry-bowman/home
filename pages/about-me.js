import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ActiveLink from '../components/ActiveLink';
import Layout from '../components/Layout';
import HeaderRow from '../components/HeaderRow';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaIcon from '../components/MediaIcon';
import CircleLine from '../components/CircleLine';
import ExitIcon from '../components/ExitIcon';

import sizes from '../data/sizes';

const AboutMe = styled.div`
  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 850px;
    margin: 0 auto;

    h3 {
      padding-bottom: 40px;
    }

    & > div {
      width: 49%;

      @media (max-width: ${sizes.tablet}) {
        width: 100%;
        margin-bottom: 60px;
      }
    }
  }
  .main-txt {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    padding: 120px 10px;
    max-width: 500px;
    margin: auto;
    p {
      font-size: 2rem;
      line-height: 3.5rem;
      font-weight: 400;
    }

    @media (max-width: ${sizes.tablet}) {
      padding: 20px;
    }
    display: flex;
    justify-content: center;
    h3 {
      font-size: 3.8rem;
      text-align: center;
    }
    p {
      padding-top: 30px;

      &:last-of-type {
        padding-bottom: 30px;
      }
    }
  }
`;

export default () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Kamry Bowman Portfolio</title>
    </Head>
    <AboutMe>
      <Header delay=".2s">
        {({ delay }) => (
          <React.Fragment>
            <h1 className="main-head">
              <a href="/">Kamry Bowman</a>
            </h1>
            <nav>
              <HeaderRow delay={delay}>
                <ActiveLink prefetch href="/about-me">
                  <a>About Me</a>
                </ActiveLink>
              </HeaderRow>
              <HeaderRow barRight delay={delay}>
                <ActiveLink prefetch href="/">
                  <a>Home</a>
                </ActiveLink>
              </HeaderRow>
              <HeaderRow delay={delay}>
                <ActiveLink prefetch href="/portfolio">
                  <a>Portfolio</a>
                </ActiveLink>
              </HeaderRow>
            </nav>
          </React.Fragment>
        )}
      </Header>
      <div className="main-content">
        <section className="main-txt">
          <h3>I'm Kamry.</h3>
          <p>{`I love working in javascript, and I especially love React. `}</p>
          <p>
            {`I like finding ways to do things with CSS and HTML primitives, and keeping my markup semantic. I am strong in taking designs and implementing them faithfully while also making them resilient and responsive.`}
          </p>
          <p>
            {`On the server side, I love working in Node and Python. I have spent some time in other languages, but Node and Python are where I'm happiest.`}
          </p>
          <p>
            {`I really love working on a team, burrowing into a problem set and bringing back a solution that works for everyone. Scalability and reusability saves lives\u2122.`}
          </p>
          <p>
            {`I studied economics and philosophy at the University of Michigan. Then I had a career helping small businesses get SBA loans. Now I develop software. I live in Denver, CO.`}
          </p>
          <p>
            {`It's satisfying to help others doing something that gets me excited every day.`}
          </p>
          <p>
            {`If you want to chat, you can find me at kamry.bowman on gmail.`}
          </p>
          <CircleLine height="40px" cols={1} />
        </section>
        <section className="gallery" />
      </div>
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
          <p>Copyright 2019 Kamry Bowman</p>
        </div>
      </Footer>
    </AboutMe>
  </Layout>
);
