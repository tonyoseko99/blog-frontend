import { Button, Row, Card, Col, Container } from "react-bootstrap";
import Article from "./Article";
import Headline from "./Headline";

// define function Articles
function Articles({ articles }) {
  return (
    <Container>
      {/* get the first article from the array */}
      <Row xs={4} md={8} lg={12} className="g-8">
        {articles.slice(0, 0).map((article) => (
          <Col key={article.id}>
            <Headline article={article} key={article.id} />
          </Col>
        ))}
      </Row>
      {/* get the rest of the articles from the array  */}
      <Row xs={1} md={4} className="g-4">
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
