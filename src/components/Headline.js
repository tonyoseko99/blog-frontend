import React from "react";
import { Card } from "react-bootstrap";
function Headline({ article }) {
  return (
    <div>
      <Card>
        {/* <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
        </Card.Body> */}
      </Card>
    </div>
  );
}

export default Headline;
