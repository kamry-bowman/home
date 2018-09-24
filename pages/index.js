import React from 'react';
import styled, { keyframes, injectGlobal } from 'styled-components';
import Link from 'next/link';
import shortid from 'shortid';
import Layout from '../components/Layout';
import HeaderRow from '../components/HeaderRow';
import Header from '../components/Header';
import skillArr from '../data/skills';

const dropIn = keyframes`
  0% {
    transform: translatey(-100vh);
  }
`;

const HomePage = styled.div`
    width: 100%;
    margin: 0 auto;
    * {
        box-sizing: border-box;
    }
    .main-content {
      display: flex;
      width: 100%;
      max-width: 850px;
      margin: 0 auto;

      & > div {
        width: 49%;
      }
    }
    .main-img {
      animation: ${dropIn} .6s cubic-bezier(.46,1.68,.68,.33);
      img {
        width: 100%;
      }
    }
    .main-txt {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: 'Nova Flat', 'sans serif';
      h3 {
        font-size: 3.8rem;
      }
      li {
        font-size: 2.8rem;
      }
    }
`;

export default () => (
  <Layout>
    <HomePage>
      <Header delay=".6s">
        {
          ({ delay }) => [
            <h1>Kam Bowman</h1>,
            <HeaderRow delay={delay}>
              <h2>Web Development</h2>
            </HeaderRow>,
            <nav>
              <HeaderRow barRight delay={delay}>
                <Link href="portfolio">
                  <a>Portfolio</a>
                </Link>
              </HeaderRow>
              <HeaderRow delay={delay}>
                <Link href="blog">
                  <a>Blog</a>
                </Link>
              </HeaderRow>
            </nav>,
          ]
        }
      </Header>
      <div className="main-content">
        <div className="main-img">
          <img src="static/programmer.svg" alt="" />
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
    </HomePage>
  </Layout>
);
