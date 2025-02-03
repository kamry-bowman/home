import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import ActiveLink from '../components/ActiveLink';
import Layout from '../components/Layout';
import HeaderRow from '../components/HeaderRow';
import Header from '../components/Header';
import Footer from '../components/Footer';
import projectArr from '../data/projects';
import MediaIcon from '../components/MediaIcon';
import ProjectCard from '../components/ProjectCard';
import CircleLine from '../components/CircleLine';
import ExitIcon from '../components/ExitIcon';

import sizes from '../data/sizes';

const pulse = keyframes`
  100% {
    transform: scale(1.3);
  }
`;
const upDown = keyframes`
  0% {
    transform: translate(0);
  }
  49.99% {
    transform: translate(0);
  }
  50% {
    transform: translate(0, 8px);
  }
  99.99% {
    transform: translate(0, 8px);
  }
  100% {
    transform: translate(0);
  }
`;

const Portfolio = styled.div`
  .card {
    /* max-width: 80%; */
    width: auto;

    display: flex;
    justify-content: center;
    border-radius: 10px;
    border: 25px solid black;

    padding: 60px;

    @media (max-width: ${sizes.tablet}) {
      width: 100%;
      padding-left: 54px;
      padding-right: 54px;
      border-width: 25px;
    }

    @media (max-width: ${sizes.mobile}) {
      padding-left: 5%;
      padding-right: 5%;
      border-radius: 0;
      border-width: 5%;
    }

    h1 {
      text-align: center;
      font-size: 4rem;
      @media (max-width: ${sizes.mobile}) {
        font-size: 3rem;
      }
    }

    p {
      font-family: arial, 'sans serif';
      font-size: 2rem;
      font-style: italic;
      padding-bottom: 3rem;
      line-height: 3rem;
    }
  }

  .intro-text {
    min-width: 40%;
    max-width: 700px;
    margin: 80px auto 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    h1 {
      margin-bottom: 60px;
      width: 100%;
    }

    p {
      min-width: 400px;
      @media (max-width: ${sizes.mobile}) {
        min-width: 200px;
      }
    }
  }

  .gallery {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 140px;

    @media (max-width: ${sizes.mobile}) {
      margin-bottom: 0;
    }

    & > section {
      margin: 80px 0;
    }
  }
`;

const AutoScroll = styled('div')`
  position: fixed;
  bottom: 40px;
  right: 20px;
  display: flex;
  flex-direction: column;

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;
    -webkit-appearance: none;
    font-size: 40px;

    &.attention-move {
      animation: ${upDown} 0.8s infinite;
    }

    &:focus {
      outline: dotted 1px black;
    }
    &:hover {
      animation: ${pulse} 0.5s linear alternate infinite;
    }

    &::-moz-focus-inner {
      border: 0;
      padding: 0;
    }
    img {
      width: 30px;
    }
  }
`;

export default () => {
  const ref = useRef(null);
  const [position, setPosition] = useState(0);
  const [target, setTarget] = useState(null);

  // initialize points with a top of page "scrollIntoView" function to have similar
  // API as DOM nodes for specific elements
  const points = useRef([
    {
      scrollIntoView: () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      },
    },
  ]);

  const updateScroll = () => {
    if (ref.current && window && position !== undefined) {
      const distance = window.scrollY || 0;
      let newPoint = 0;

      points.current.forEach((point, index) => {
        if (distance > point.offsetTop - 10) {
          newPoint = index;
        }
      });
      setPosition(newPoint);
    }
  };

  const nextPosition = () => {
    const nextPoint = (position + 1) % points.current.length;
    setTarget(nextPoint);
  };

  const prevPosition = () => {
    const candidate = position - 1;
    const prevPoint =
      candidate >= 0 ? candidate : points.current.length + candidate;
    setTarget(prevPoint);
  };

  useEffect(() => {
    if (points.current && typeof target === 'number') {
      const current = points.current[target];
      current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [target]);

  // listener to update cards when ref updates
  useEffect(() => {
    if (ref.current) {
      const cards = ref.current.querySelectorAll('.card');
      points.current.splice(1, points.current.length - 1);
      cards.forEach(card => {
        points.current.push(card);
      });
    }
  }, []);

  useEffect(() => {
    updateScroll();
  }, [points]);

  // initialize scroll behavior
  useEffect(() => {
    document.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, [ref.current, points]);

  return (
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
              </nav>
            </React.Fragment>
          )}
        </Header>
        <div className="main-content" ref={ref}>
          <AutoScroll>
            {!ref.current || position === 0 ? null : (
              <button onClick={prevPosition}>
                <img src="../static/up-arrow.svg" />
              </button>
            )}
            {ref.current && position === points.current.length - 1 ? null : (
              <button
                onClick={nextPosition}
                className={position === 0 ? 'attention-move' : undefined}
              >
                <img src="../static/down-arrow.svg" />
              </button>
            )}
          </AutoScroll>
          <section className="intro-text card">
            <h1>Some Projects I've Worked On</h1>
            <p>Below is a collection of projects I've worked on.</p>
            <p>
              They use a variety of tech stacks, though they all seem to involve
              some Javascript somewhere!
            </p>
          </section>
          <CircleLine height="160px" />
          <section className="gallery">
            {projectArr.map((project, index) => (
              <div key={index} ref={ref}>
                <ProjectCard project={project} className="card" />
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
            <p>Copyright 2019 Kamry Bowman</p>
          </div>
        </Footer>
      </Portfolio>
    </Layout>
  );
};
