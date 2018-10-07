import React from 'react';
import styled from 'styled-components';

const ProjectCard = styled.section.attrs({
  className: props => props.className || undefined,
})`

  .image-content {
    display: flex;

    img {
      border: 40px solid black;
      border-radius: 15px;
    }
  }

  .text-content {
    padding: 0 20px;
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
      <section>
        <h2>Technology</h2>
        <ul>
          {technology.map((tech, index) => (
            <li key={index}>
              {tech}
            </li>
          ))}
        </ul>
      <a href={url}>Visit</a>
      </section>
    </div>
    <div className="image-content">
        <img src={`/static/${img}`} alt="" />
    </div>
  </ProjectCard>
);
