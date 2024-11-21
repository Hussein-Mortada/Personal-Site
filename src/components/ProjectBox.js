import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function ProjectBox({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="project-box" 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {project.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img 
              src={image} 
              alt={`${project.title} screenshot`} 
              className={`swiper-image ${isHovered ? 'fade-out' : ''}`} 
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {isHovered && (
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>Tech Stack: {project.techStack.join(', ')}</p>
          <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repository</a>
        </div>
      )}
    </div>
  );
}

export default ProjectBox;
