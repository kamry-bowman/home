import React from 'react';
import styled from 'styled-components';

import sizes from '../data/sizes';

const Projec = styled.section.attrs({
  className: props => props.className || undefined,
})`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    a {
      text-align: center;
    }
    img {
      border: 40px solid black;
      border-radius: 15px;

      @media (max-width: ${sizes.tablet}) {
        border-width: 20px;
      }

      @media (max-width: ${sizes.mobile}) {
        border-width: 2px;
        max-width: 90%;
      }
    }
  }
  a.text-link {
    color: black;
    font-size: 2.2rem;
    text-align: center;
    padding-top: 40px;

    &:visited {
      color: gray;
    }
  }

  .text-content {
    width: 500px;
    padding: 0 20px 40px;
    display: flex;

    @media (max-width: ${sizes.tablet}) {
      width: 100%;
    }

    @media (max-width: ${sizes.mobile}) {
      padding: 0 2.5%;
    }

    flex-direction: column;
    justify-content: space-around;

    & > * {
      padding-bottom: 60px;

      &:last-child {
        padding-bottom: 10px;
      }
    }
  }

  .tech {
    padding-top: 40px;
    text-align: center;

    h2 {
      margin-bottom: 1rem;
    }

    li {
      font-size: 2rem;
      list-style-type: none;
      font-weight: 300;
    }
  }

  & > div {
    padding: 30px;

    @media (max-width: ${sizes.mobile}) {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export default ({
  className = '',
  project: { name, description, technology, url, img },
}) => {
  const image = <img src={`/static/${img}`} alt="" />
  return (
  <Projec className={className}>
    <div className="text-content">
      <h1>{name}</h1>
      {typeof description === 'string' ? (
        <p>{description}</p>
      ) : (
        description.map((item, i) => <p key={i}>{item}</p>)
      )}
    </div>
      <div className="image-content">
      {
      url ? (
        <a href={url}>
          {image}
          </a>
      ) : image
      }
      </div>
    <section className="tech">
      <h2>Technology</h2>
      <ul>
        {technology.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </section>
    {
      url && (
      <a className="text-link" href={url}>
        Visit
      </a>
      )
    }
  </Projec>
  )
}
;
