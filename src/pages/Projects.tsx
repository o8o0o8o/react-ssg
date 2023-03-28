import React from "react";
import ProjectCard from "../components/Card";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-cards">
        <ProjectCard
          title="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
          imageSrc="https://via.placeholder.com/300x200"
          link="https://www.example.com/project1"
        />
        <ProjectCard
          title="Project 2"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
          imageSrc="https://via.placeholder.com/300x200"
          link="https://www.example.com/project2"
        />
        <ProjectCard
          title="Project 3"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi."
          imageSrc="https://via.placeholder.com/300x200"
          link="https://www.example.com/project3"
        />
      </div>
    </div>
  );
};

export default Projects;
