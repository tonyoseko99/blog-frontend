import { Card, Button } from "react-bootstrap";
function Article({ article }) {
  return (
    <Card >
      <Card.Img variant="top" src={article.image_url} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>
          {article.content}
        </Card.Text>
        <Button variant="primary">read more</Button>
      </Card.Body>
    </Card>
  );
}

export default Article;
