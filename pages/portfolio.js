import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import ActiveLink from '../components/ActiveLink';
import Layout from '../components/Layout';
import HeaderRow from '../components/HeaderRow';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projectArr from '../data/projects';
import MediaIcon from '../components/MediaIcon';
import ProjectCard from '../components/ProjectCard';
import CircleLine from '../components/CircleLine';

import sizes from '../data/sizes';

const Portfolio = styled.div`
  .card {
    max-width: 90%;
    @media (max-width: ${sizes.tablet}) {
      max-width: 100%;
    }
    margin: 0 auto;
    h1 {
      text-align: center;
      font-size: 4rem;
      @media (max-width: ${sizes.mobile}) {
        font-size: 3.4rem;
      }
    }

    p {
      font-family: arial, 'sans serif';
      font-size: 2rem;
      font-style: italic;
    }

    display: flex;
    justify-content: center;
    border-radius: 10px;
    border: 15px solid black;

    padding: 60px;
    @media (max-width: ${sizes.tablet}) {
      padding-left: 10%;
      padding-right: 10%;
      border-radius: 0;
      border-width: 25px;
    }

    @media (max-width: ${sizes.mobile}) {
      padding-left: 5%;
      padding-right: 5%;
      border-radius: 0;
      border-width: 5%;
    }

    background-color: lightgray;
  }

  .intro-text {
    min-width: 40%;
    max-width: 500px;
    margin: 80px auto 0;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 40px;
    }
  }

  .gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;

    & > section {
      margin: 80px 0;
    }
  }
`;

export default () => (
  <Layout>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Kamry Bowman Portfolio</title>
    </Head>
    <Portfolio>
      <Header delay=".2s">
        {({ delay }) => (
          <React.Fragment>
            <h1 className="main-head">
              {' '}
              <a href="/">Kamry Bowman</a>
            </h1>
            <nav>
              <HeaderRow delay={delay}>
                <ActiveLink prefetch href="/portfolio">
                  <a>Portfolio</a>
                </ActiveLink>
              </HeaderRow>
              <HeaderRow barRight delay={delay}>
                <ActiveLink prefetch href="/">
                  <a>Home</a>
                </ActiveLink>
              </HeaderRow>
              <HeaderRow delay={delay}>
                <ActiveLink prefetch href="/about-me">
                  <a>About Me</a>
                </ActiveLink>
              </HeaderRow>
              <HeaderRow barRight delay={delay}>
                <ActiveLink href="https://glitteringglobofwisdom.com/">
                  <a>Blog</a>
                </ActiveLink>
              </HeaderRow>
            </nav>
          </React.Fragment>
        )}
      </Header>
      <div className="main-content">
        <section className="intro-text card">
          <h1>Some Projects I've Worked On</h1>
          <p>
            Below is a collection of projects I've worked on. They use a variety
            of tech stacks, though they all seem to involve some Javascript
            somewhere!
          </p>
        </section>
        <CircleLine height="160px" />
        <section className="gallery">
          {projectArr.map((project, index) => (
            <div key={index}>
              <ProjectCard className="card" project={project} />
              {index !== projectArr.length - 1 ? (
                <CircleLine height="160px" />
              ) : (
                undefined
              )}
            </div>
          ))}
        </section>
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
          <p>Copyright 2018 Kamry Bowman</p>
        </div>
      </Footer>
    </Portfolio>
  </Layout>
);
