import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Articles from "./Articles";

function Home() {
  const [articles, setArticles] = useState([]);
  const [headline, setHeadline] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/articles")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
        setHeadline(data);
      });
  }, []);

  // create a Headline component
  const Headline = ({ headline }) => {
    return (
      <div className="headline-container">
        <h1 className="blog-title">THE NEW TIMES</h1>
        <div className="headline">
          <div className="headline-card">
            {headline.slice(0, 1).map((article) => (
              <div className="headline-card-body">
                <img src={article.image_url} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.content}</p>
              </div>
            ))}
          </div>
          <div className="other-headlines">
            {headline.slice(2, 5).map((article) => (
              <div className="other-headlines-card">
                <img src={article.image_url} alt={article.title} />
                <div>
                  <h2>{article.title}</h2>
                  <p>{article.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // pass the headline to the Headline component
  return (
    <Container>
      <Headline headline={headline} />
      <Articles articles={articles} />
    </Container>
  );
}
export default Home;
