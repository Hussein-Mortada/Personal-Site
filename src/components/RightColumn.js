import React from 'react';
import ProjectBox from './ProjectBox.js';

function RightColumn() {
  const projects = [
    {
      title: 'Tai Yang Clinic',
      images: ['/data/SunClinic1.jpg', '../data/SunClinic2.jpg', '../data/SunClinic3.jpg', '../data/SunClinic4.jpg', '../data/SunClinic5.jpg', '../data/SunClinic6.jpg', '../data/SunClinic7.jpg', '../data/SunClinic8.jpg', '../data/SunClinic9.jpg', '../data/SunClinic10.jpg'],
      description: 'I worked as the Lead Developer and Project Manager on this exciting project for a prospective acupuncturist',
      techStack: ['Java', 'JavaScript', 'HTML/CSS', 'MySQL and Oracle RDBMS'],
      repoLink: 'https://github.com/Hussein-Mortada/SunClinicRevised'
    },{
      title: 'Python Youtube Downloader',
      images: ['/data/ytdownload1.jpg', '/data/ytdownload2.jpg', '/data/ytdownload3.jpg'],
      description: 'Created a web application which received 5000+ unique downloads when it was up, allowing users to download Youtube Videos in MP3 or MP4 format',
      techStack: ['Python', 'PyTube', 'FFMPEG', 'HTML/CSS', 'React'],
      repoLink: 'https://github.com/Hussein-Mortada/youtube-downloader-backend'
    },{
      title: 'Movie App',
      images: ['/data/MovieApp1.jpg', '/data/MovieApp2.jpg','/data/MovieApp3.jpg','/data/MovieApp4.jpg'],
      description: 'This application was built to demonstrate the use of online API\'s.',
      techStack: ['Java - Spring', 'JavaScript - React', 'HTML/CSS', 'MySQL'],
      repoLink: 'https://github.com/Hussein-Mortada/MoviesAPI-Frontend'
    },{
      title: 'Landon Hotel',
      images: ['/data/LandonHotel1.jpg', '/data/LandonHotel2.jpg','/data/LandonHotel3.jpg','/data/LandonHotel4.jpg'],
      description: 'This project was built during my time in WGU. It is an app to demonstrate Java Multithreading in fullstack web development',
      techStack: ['Java - Spring', 'JavaScript - Angular', 'HTML/CSS'],
      repoLink: 'https://github.com/Hussein-Mortada/Java-Angular-HotelApp'
    },{
      title: 'WGU Capstone',
      images: ['/data/Capstone1.png', '/data/Capstone2.png','/data/Capstone3.png','/data/Capstone4.png','/data/Capstone5.png','/data/Capstone6.png'],
      description: 'My Capstone Project built for WGU. Frontend was irrelevant to this project as I wanted to demonstrate my abilities as a backend developer',
      techStack: ['Java - Spring', 'JavaScript - React', 'HTML/CSS', 'MySQL'],
      repoLink: 'https://github.com/Hussein-Mortada/Inventory-Management-Java-React-App'
    },{
      title: 'Inventory Management App',
      images: ['/data/Home nVentory.png'],
      description: 'An inventory management app ',
      techStack: ['Java - Spring', 'JavaScript', 'HTML/CSS', 'MySQL'],
      repoLink: 'https://github.com/Hussein-Mortada/Home-nVentory'
    },{
      title: 'World Map',
      images: ['/data/WorldMap1.jpg', '/data/WorldMap2.jpg'],
      description: 'A small project built as an intro to Angular and parsing an SVG',
      techStack: ['Java - Spring', 'JavaScript - Angular', 'HTML/CSS'],
      repoLink: 'https://github.com/Hussein-Mortada/Angular-WorldMap'
    },{
      title: 'Blog Platform',
      images: ['/data/BlogPlatform1.jpg', '/data/BlogPlatform2.jpg','/data/BlogPlatform3.jpg'],
      description: 'A blogging platform built as a fullstack web development project with commenting, post liking, etc.',
      techStack: ['Java - Spring', 'JavaScript - React', 'HTML/CSS', 'MySQL'],
      repoLink: 'https://github.com/Hussein-Mortada/Blog-Platform-Frontend'
    },{
      title: 'Data Entry App',
      images: ['/data/MedicalApp1.jpg','/data/MedicalApp2.jpg'],
      description: 'A small app to help a friend with practicing data entry for their school',
      techStack: ['Java - Spring', 'JavaScript - React'],
      repoLink: 'https://github.com/Hussein-Mortada/medical-app-frontend'
    }
  ];

  return (
    <div className="right-column">
      {projects.map((project, index) => (
        <ProjectBox key={index} project={project} />
      ))}
    </div>
  );
}

export default RightColumn;
