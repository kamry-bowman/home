import useAutoHooks from "../../public/use-autohooks-300.gif";
import cadence from "../../public/cadence-300.gif";
import notesImg from "../../public/notes-300x350.gif";
import towelify from "../../public/towelify-300.gif";
import archImg from "../../public/arch-300x350.gif";


const data = [
  {
    name: 'use-autoscroll',
    description:
      "This is a React custom hook I published to celebrate the release of hooks. It's a useful pattern to have generalized, and it's even used on this page!",
    url: 'https://www.npmjs.com/package/use-autoscroll',
    technology: ['React', 'React hooks', 'NPM', 'React Storybook'],
    img: useAutoHooks,
  },
  {
    name: 'Cadence Shift Scheduler',
    description: [
      `Built by me along with the Cadence team, this full-stack web application features drag and drop shift scheduling for small businesses.`,
      `It features an attractive design, shift validation, coverage calculation, and is supported by a combination of React, Firebase, and postgresql.`,
    ],
    img: cadence,
    technology: [
      'React',
      'Emotion',
      'Redux',
      'Express',
      'Postgresql',
      'Jest',
      'React Testing Library',
      'Firebase Auth',
    ],
  },
  {
    name: 'Lambda Notes',
    description: [
      `Note Management System built using React and Redux front-end, with an Express back-end supported by postgresql.`,
      `I also implemented doubly linked list as the data structure to support ordered cards, which was a lot of fun.`,
    ],
    technology: [
      'React',
      'Styled Components',
      'Redux',
      'Express',
      'Postgresql',
      'Jest',
    ],
    img: notesImg,
  },
  {
    name: 'Towelify',
    description: `Named in honor of Douglas Adams, this Hackathon project is an opinionated React npm module aiming at recreating some of Bootstrap's greatest hits using the render props pattern.`,
    technology: ['React', 'React Storybook', 'NPM'],
    img: towelify,
  },
  {
    name: 'S & J Architecture',
    description:
      'A responsive small business website built using pure html, css, and vanilla javascript.',
    technology: ['HTML', 'CSS', 'Javascript'],
    img: archImg,
  },
];

export default data;