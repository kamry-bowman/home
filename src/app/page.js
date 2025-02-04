"use client"

import React from 'react';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';
import HeaderRow from '@/components/HeaderRow';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import skillArr from '@/data/skills';
import sizes from '@/data/sizes';
import MainImage from '@/components/MainImage';

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
  .thin {
    font-weight: 300;
  }
  .main-content {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 850px;
    margin: 0 auto;
    padding-top: 40px;

    @media (max-width: ${sizes.mobile}) {
      padding-left: 15px;
      padding-right: 15px;
    }

    & > div {
      width: 49%;

      @media (max-width: ${sizes.tablet}) {
        width: 100%;
        margin-bottom: 60px;
      }

      @media (max-width: ${sizes.mobile}) {
        margin-bottom: 0;
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
    font-weight: 300;
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

export default function IndexPage () {
  return (
    <>
        <Head>
          <meta property="og:title" content="Kamry Bowman" />
          <meta
            property="og:image"
            content="//kamrybowman.com/public/drawing.png"
          />
          <link
            rel="shortcut icon"
            href="/favicon.ico"
            type="image/x-icon"
          />
      <title>Kamry Bowman</title>
    </Head>
    <HomePage>
      <Header $delay=".2s">
        {({ $delay }) => (
          <React.Fragment>
            <h1 className="main-head">
              <Link href="/">
                Kamry <span className="thin">Bowman</span>
              </Link>
            </h1>
            <HeaderRow $titleMorph="left" $delay={$delay}>
              <h2>
                <span className="thin">Web</span> Development
              </h2>
            </HeaderRow>
            <div className="main-content">
              <div className="main-img">
                <MainImage />
              </div>
              <div className="main-txt">
                <h3>I build websites with</h3>
                <ul>
                  {skillArr.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <nav>
              <HeaderRow $barRight $delay={$delay}>
                <Link href="/portfolio">
                  Portfolio
                </Link>
              </HeaderRow>
              <HeaderRow $delay={$delay}>
                <Link href="/about-me">
                  About Me
                </Link>
              </HeaderRow>
            </nav>
          </React.Fragment>
        )}
      </Header>
    </HomePage>
      <Footer />
    </>
  )
}
