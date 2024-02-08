import React from 'react';
import { Card } from 'react-bootstrap';

// Define the props interface for the HobbyCard component
interface HobbyCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

// HobbyCard Component
// This component represents a card displaying information about a hobby.
// It displays the title, description, and an image related to the hobby.

const HobbyCard: React.FC<HobbyCardProps> = ({ title, description, imageSrc }) => {
  return (

    // Card component to display hobby information
    <Card className="mb-3 hobbies-card" style={{ width: '17rem' }}>

      {/* Image for the hobby */}
      <Card.Img className="hobby-pic" variant="top" src={imageSrc} />

      <Card.Body>
        {/* Title of the hobby */}
        <Card.Title>{title}</Card.Title>
        {/* Description of the hobby */}
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      
    </Card>
  );
};

export default HobbyCard;
