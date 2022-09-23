import { Button, Row, Card, Col, Container } from "react-bootstrap";
import Article from "./Article";

// define function Articles
function Articles({ articles }) {
  
  return (
    <Container>
      {/* get the rest of the articles from the array  */}
      <Row xs={4} md={3} className="g-8">
        {articles.slice(1, 10).map((article) => (
          <Col key={article.id}>
            <Article article={article} key={article.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Articles;
