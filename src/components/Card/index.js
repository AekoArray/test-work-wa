import React from "react";
import { Card, Button } from "react-bootstrap";

const List = ({ id, model, number, wasServiced, addInPassed }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Text>{number}</Card.Text>
        {!wasServiced ? (
        <Button onClick={() => addInPassed(id)} type="primary">
          Add in passed
        </Button>)
        : (<div>The machine has been serviced</div>)}
      </Card.Body>
    </Card>
  );
};

export default List;
