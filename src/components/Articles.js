import { Button, Row, Card, Col } from "react-bootstrap";
import Article from "./Article";
function Articles({ articles }) {
  return (
    <Row xs={1} md={2} className="g-4">
        {articles.map((article) => (
            <Col key={article.id}>
                <Article article={article} key={article.id} />
            </Col>
        ))}
    </Row>
  );
}

export default Articles;
