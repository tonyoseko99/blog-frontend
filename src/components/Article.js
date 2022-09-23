function Article({ article }) {
  return (
    <div className="card-article" >
      <img src={article.image_url} alt={article.title} />
      <div className="card-body">
        <h2>{article.title}</h2>
        <p>
          {article.content}
        </p>
      </div>
    </div>
  );
}

export default Article;
