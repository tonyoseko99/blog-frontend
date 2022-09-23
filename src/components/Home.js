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
      });
  }, []);

  // return the first article from the array
  const Headline = () => {
    useEffect(() => {
      console.log(articles[0]);
      setHeadline(articles[0]);
    }, []);

    return (
      <div>
        <h1>{headline.title}</h1>
        <p>{headline.content}</p>
      </div>
    );
  };

  return (
    <Container>
      <Headline />
    </Container>
  );
}

export default Home;
