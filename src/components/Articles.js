import Article from "./Article";

// define function Articles
function Articles({ articles }) {
  
  return (
    <div className="articles-container">
      {articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}

export default Articles;
