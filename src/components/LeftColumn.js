import React from 'react';



function LeftColumn() {
  return (
    <div className="left-column">
      <section className="header-section">
      <h1>Hussein Mortada</h1>
      <h2>Software Engineer</h2>
      </section>
      <section className="about-section">
        <p>I started coding in 2021 and have been enjoying it since. I enjoy creating things I love and am passionate about. I am always working on something new.
        </p>
        <p>Currently I am looking for full-time work as a junior engineer. I specialize in backend development but am happy to put ideas into great design through the frontend. 
        </p>
        <p>In the past I've had the pleasure to lead a full team of developers building a website for an upcoming acupuncturist. I lead the development, design, and testing of the application, managing the rest of the developers and holding weekly code reviews, as well as frequent meetings with the client to ensure that the project met her requirements.
        </p>
      </section>
      <br></br>
      <section className="contact-section">
        <div className="social-icons">
        <a href="https://github.com/Hussein-Mortada" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/husseinmortada/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="mailto:hussein.mortada.sd@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      </section>
    </div>
  );
}

export default LeftColumn;
