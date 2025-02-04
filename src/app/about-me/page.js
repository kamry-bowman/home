"use client"

import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ActiveLink from '@/components/ActiveLink';
import HeaderRow from '@/components/HeaderRow';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MediaIcon from '@/components/MediaIcon';
import CircleLine from '@/components/CircleLine';
import ExitIcon from '@/components/ExitIcon';

import sizes from '@/data/sizes';

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
  <>
    <Head>
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
              <HeaderRow $barRight delay={delay}>
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
          <p>{`I like using software to deliver real world goods and services better and cheaper.`}</p>
          <p>{`I have experience in JavaScript, React, Angular, Java, Go, and Python.`}</p>
          <p>
            {`I really love working on a team, burrowing into a problem set and bringing back a solution that works for everyone. Scalability and reusability saves lives\u2122.`}
          </p>
          <p>
            {`I studied economics and philosophy at the University of Michigan. I have developed software for health insurance, warehouse management systems, and logistics fullfillment.`}
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
            imgsrc="/github.svg"
            target="https://github.com/kamry-bowman"
          />
          <MediaIcon
            imgsrc="/twitter.svg"
            target="https://twitter.com/MispelledToyota"
          />
          <MediaIcon
            imgsrc="/linkedin.svg"
            target="https://linkedin.com/in/kamry-bowman"
          />
        </div>
        <div className="copyright">
          <p>Copyright 2025 Kamry Bowman</p>
        </div>
      </Footer>
    </AboutMe>
    </>
);
