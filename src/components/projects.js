import React from 'react';
import './projects.css';
import Footer from './Footer';
import item1 from '../photos/item-1.jpg';
import item2 from '../photos/item-2.jpg';
import item3 from '../photos/item-3.jpg';
import item4 from '../photos/item-4.jpg';
import item5 from '../photos/item-5.jpg';
import item6 from '../photos/item-6.jpg';
import item7 from '../photos/item-7.jpg';
import item8 from '../photos/item-8.jpg';
import item9 from '../photos/item-9.jpg';

const projectsData = [
  {
    image: item1,
    dname: 'Architecture Green Design',
    year: '2020',
  },
  {
    image: item2,
    dname: 'Tower Smart Design ',
    year: '2020',
  },
  {
    image: item3,
    dname: 'Old Modern Design',
    year: '2021',
  },
  {
    image: item4,
    dname: 'Freedom Stadium',
    year: '2020',
  },
  {
    image: item5,
    dname: 'Modern House Design',
    year: '2021',
  },
  {
    image: item6,
    dname: 'Office Smart Tower ',
    year: '2022',
  },
  {
    image: item7,
    dname: 'Modern Company',
    year: '2023',
  },
  {
    image: item8,
    dname: 'Modern Bridge',
    year: '2023',
  },
  {
    image: item9,
    dname: 'Modern Opera House',
    year: '2023',
  },
];

export default function Projects() {
  return (
    <div className='projects'>
      <h1>Some of our Global Projects</h1>
      {projectsData.map((project, index) => (
        <div key={index} className='project-item'>
        <img src={project.image} alt={`Project ${index + 1}`} />
        <p>Design Name: {project.dname}</p>
        <p>Built in: {project.year}</p>
      </div>
      ))}
      <Footer />
    </div>
  );
}
