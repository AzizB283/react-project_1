import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../actions/action";

function News() {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.update.news);
  console.log(article);

  const getNews = () => {
    dispatch(fetchNews());
  };

  // useEffect(() => {}, [article]);

  const imgStyle = {
    hight: "auto",
    width: "80%",
    border: "4px solid black ",
    borderRadius: "5%",
  };
  const articleStyle = {
    width: "50%",
    margin: "0 auto",
    color: "black",
  };
  return (
    <>
      <h1>News - Top Headlines</h1>

      <button onClick={getNews}>Press to see news </button>

      {article &&
        article.articles.map((item) => (
          <div style={articleStyle}>
            <div>
              <h1 key={item.title}>{item.title}</h1>
              <img style={imgStyle} src={item.urlToImage} alt="" />
              <h4>{item.description}</h4>
              <a href={item.url} target="_blank">
                READ MORE
              </a>
            </div>
          </div>
        ))}
    </>
  );
}

export default News;
