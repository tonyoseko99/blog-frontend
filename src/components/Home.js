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
        setHeadline(data[0]);
      });
  }, []);

  // create a Headline component
  const Headline = ({headline}) => {
    return (
      <div>
        <h1>{headline.title}</h1>
        <img src={headline.image_url} alt={headline.title} />
        <p>{headline.content}</p>
      </div>
    );
  };

  // pass the headline article as a prop
  return (
    <Container>
      <Headline headline={headline} />
      <Articles articles={articles} />
    </Container>
  );
}
export default Home;
