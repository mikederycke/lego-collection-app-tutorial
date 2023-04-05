import React from 'react';
import { Card, Col, ListGroup } from 'react-bootstrap';

const LegoSet = ({ setId, name, parts, yearReleased, imageUrl }) => {
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
          <Card.Title>Set {name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Set ID: {setId}</ListGroup.Item>
            <ListGroup.Item>Number of Parts: {parts}</ListGroup.Item>
            <ListGroup.Item>Year Released: {yearReleased}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LegoSet;
