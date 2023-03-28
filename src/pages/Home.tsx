import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Subheading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const StyledLink = styled.div`
  font-size: 1.5rem;
  background-color: #007bff;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to My Website</Heading>
      <Subheading>About Me</Subheading>
      <Paragraph>
        Hi, I'm Sergey Labut, a software engineer based in Białystok, Poland. I
        love building web applications using the latest technologies and tools.
      </Paragraph>
      <Subheading>My Projects</Subheading>
      <Paragraph>Check out some of my latest projects below:</Paragraph>
      <StyledLink>
        <Link to="/projects">View Projects</Link>
      </StyledLink>
    </HomeContainer>
  );
};

export default Home;
