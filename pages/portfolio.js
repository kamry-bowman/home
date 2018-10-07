import React from 'react';
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

const Portfolio = styled.div`
    .card {
      h1 {
        text-align: center;
        font-size: 4rem;
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
      background-color: lightgray;
    }

    .intro-text {
      width: 40%;
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

    &>section {
      margin: 80px 0;
    }

  }
`;

export default () => (
  <Layout>
    <Portfolio>
      <Header delay=".2s">
        {
          ({ delay }) => (
            <React.Fragment>
              <h1 className="main-head">Kam Bowman</h1>
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
                  <ActiveLink href="blog">
                    <a>Blog</a>
                  </ActiveLink>
                </HeaderRow>
              </nav>
            </React.Fragment>
          )
        }
      </Header>
      <div className="main-content">
        <section className="intro-text card">
          <h1>Some Projects I've Worked On</h1>
          <p>Below is a collection of projects I've worked on. They use a variety of tech stacks, 
            though they all seem to involve some Javascript somewhere!</p>
        </section>
        <CircleLine height="160px" />
        <section className="gallery">
          {
            projectArr.map((project, index) => (
            <div key={index} >
              <ProjectCard className="card" project={project} />
              { index !== projectArr.length - 1 ? <CircleLine height="160px" /> : undefined }
            </div>
              )
            )
          }
        </section>
      </div>
      <Footer>
        <div className="social-box">
          <MediaIcon imgsrc="static/github.svg" target="#" />
          <MediaIcon imgsrc="static/twitter.svg" target="#" />
          <MediaIcon imgsrc="static/linkedin.svg" target="#" />
        </div>
        <div className="copyright">
          <p>Copyright 2018 Kam Bowman</p>
        </div>
      </Footer>
    </Portfolio>
  </Layout>
);
