/* eslint-disable react/prop-types */
export function ArticlesIndex(props) {
  return (
    <>
      <h1>Articles</h1>
      {props.articles.map((article, i) => (
        <div key={"article_" + i}>
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <img src={article.urlToImage} />
          <p>{article.description}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </>
  );
}
