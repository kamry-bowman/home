import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.section.attrs({
  className: props => props.className || undefined,
})`

  .image-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      border: 40px solid black;
      border-radius: 15px;
    }

    a {
      margin-top: 30px;
      color: black;
      font-size: 2.2rem;

      &:visited {
        color: gray;
      }
    }
  }

  .text-content {
    width: 360px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

     p {
       text-align: center;
     } 
  }
  
  .tech {
      h2, li {
        font-family: 'Nova Flat', 'sans serif';
      }
      
     text-align: center; 
      
      h2 {
        margin-bottom: 1rem;
      }

     li {
      font-size: 2rem; 
      list-style-type: none;
     }
  }

  &>div {
    padding: 30px;
  }
`;

export default ({
  className = '',
  project: {
    name, description, technology, url, img,
  },
}) => console.log(className) || (
  <ProjectCard className={className}>
    <div className="text-content">
      <h1>
        {name}
      </h1>
      <p>
        {description}
      </p>
      <section className="tech">
        <h2>Technology</h2>
        <ul>
          {technology.map((tech, index) => (
            <li key={index}>
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </div>
    <div className="image-content">
        <img src={`/static/${img}`} alt="" />
        <a href={url}>Visit</a>
    </div>
  </ProjectCard>
);
