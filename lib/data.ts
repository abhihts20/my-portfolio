import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import CONSTANTS from '@/constants';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  // {
  //   name: 'Projects',
  //   hash: '#projects',
  // },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    jobTitle: 'Software Engineer',
    title: 'Gemini Solutions Private Limited',
    location: 'Gurugram, Haryana, India',
    description: `Led backend development and architecture design for Group Health Insurance, focusing on end-to-end flow and API integrations to multiple systems.
    <br />Directed technical planning and implementation for migrating health and travel insurance systems to modern architectures, including overhauling quote calculation systems for flexibility.
    <br />Developed partner microservices for onboarding partners, facilitating seamless integration of partner products into insurance platforms.
    <br />Directed development initiatives for a website upgrade, overseeing deployments and establishing a resilient database setup`,
    icon: React.createElement(LuGraduationCap),
    date: '2021 - Present',
  },
  {
    jobTitle: 'Technical Trainee',
    title: 'Gemini Solutions Private Limited',
    location: 'Gurugram, Haryana, India',
    description:
      `Initially focused on front-end development for an E-Website, later transitioning to developing partner modules on the admin backend and implementing generic APIs.`,
    icon: React.createElement(CgWorkAlt),
    date: '2020 - 2021',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;

const LINKS = CONSTANTS.EXTERNAL_LINKS;

type TypeOfEntry =
  | 'Programming Language'
  | 'Framework'
  | 'Tool'
  | 'Runtime Environment'
  | 'Technology'
  | 'Database'
  | 'CMS'
  | 'Library';

type SkillsWithIcon = {
  name: string;
  link: string;
  icon: string;
  typeOfEntry: string;
}[];

export const skillsWithLinksAndIcons: SkillsWithIcon = [
  {
    name: 'Javascript',
    link: LINKS.JS,
    icon: 'icons/JavaScript.svg',
    typeOfEntry: 'Programming Language',
  },
  {
    name: 'Typescript',
    link: LINKS.TS,
    icon: 'icons/TypeScript.svg',
    typeOfEntry: 'Programming Language',
  },
  {
    name: 'Node.Js',
    link: LINKS.NODEJS,
    icon: 'icons/NodeJsColor.svg',
    typeOfEntry: 'Runtime Environment',
  },
  {
    name: 'AWS Lambda',
    link: LINKS.AWS_LAMBDA,
    icon: 'icons/AWSLambda.svg',
    typeOfEntry: 'Technology',
  },
  {
    name: 'Serverless',
    link: LINKS.SERVERLESS,
    icon: 'icons/serverless-icon.svg',
    typeOfEntry: 'Technology',
  },
  {
    name: 'MongoDB',
    link: LINKS.MONGO,
    icon: 'icons/MongoDB.svg',
    typeOfEntry: 'Database',
  },
  {
    name: 'ExpressJs',
    link: LINKS.EXPRESSJS,
    icon: 'icons/ExpressJs.svg',
    typeOfEntry: 'Framework',
  },
  {
    name: 'NestJs',
    link: LINKS.NESTJS,
    icon: 'icons/Nestjs.svg',
    typeOfEntry: 'Framework',
  },
  {
    name: 'ReactJs',
    link: LINKS.REACT,
    icon: 'icons/React.svg',
    typeOfEntry: 'Library',
  },
  {
    name: 'Next.Js',
    link: LINKS.NEXTJS,
    icon: 'icons/Next.js.svg',
    typeOfEntry: 'Framework',
  },
  {
    name: 'Strapi',
    link: LINKS.STRAPI,
    icon: 'icons/Strapi.monogram.logo.svg',
    typeOfEntry: 'CMS',
  },
  {
    name: 'Postman',
    link: LINKS.POSTMAN,
    icon: 'icons/postman-icon.svg',
    typeOfEntry: 'Tool',
  },
  {
    name: 'Git',
    link: LINKS.GIT,
    icon: 'icons/Git.svg',
    typeOfEntry: 'Tool',
  },
  {
    name: 'Jira',
    link: LINKS.JIRA,
    icon: 'icons/Jira.svg',
    typeOfEntry: 'Tool',
  },
];
