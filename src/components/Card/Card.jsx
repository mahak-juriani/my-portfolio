import React from 'react';
import './Card.css';

const Card = ({ imgSrc, title, description, githubLink }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="Project" className="project-img" />
      <div className="content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <a href={githubLink} className="github-link">GitHub</a>
        <div className="icons">
          
        </div>
      </div>
    </div>
  );
};

export default Card;
