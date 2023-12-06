import axios from "axios";
import { useEffect, useState } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleArticlesIndex = () => {
    console.log("articles");
    // remove apikey before ga
    axios.get("https://newsapi.org/v2/everything?q=wakanda&apiKey=").then((response) => {
      setArticles(response.data.articles);
      console.log(articles);
    });
  };

  useEffect(handleArticlesIndex);

  return (
    <div>
      <h1>News</h1>
      <ArticlesIndex articles={articles} />
    </div>
  );
}
