import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

const Image = styled.img`
  border-radius: 4px;
  max-width: 100%;
`;

const Link = styled.a`
  background-color: #0077ff;
  border-radius: 4px;
  color: #ffffff;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0057b8;
  }
`;

const DefaultCard = ({ title, description, imageSrc, link }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image src={imageSrc} />
      <Link>{link}</Link>
    </Card>
  );
};

export default DefaultCard;
