import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Articles from "./Articles";
function Home() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/articles")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
  }, []);

  return (
    <Container>
        <Articles articles={articles} />
    </Container>
  );
}

export default Home;
