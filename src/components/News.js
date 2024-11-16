import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const News = () => {
  let [articles, setArticle] = useState(null);
  let [totalResults, setTotalResults] = useState("");
  let [page, setPage] = useState(1);

  useEffect(() => {
    let data = async () => {
      try {
        let response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=ec43d86c021647c7972a20f8c1fd316f&page=${page}&pageSize=20`
        );
        if (response) {
          let result = await response.json();
          setArticle(result.articles);
          setTotalResults(result.totalResults);
        } else {
          throw new Error("failed to fetch");
        }
      } catch (e) {
        console.log(e.message);
      }
    };
    data();
  }, [page]);

  let handleNextBtn = async () => {
    if (page + 1 > Math.ceil(totalResults / 20)) {
    } else {
      setArticle(null);
      setPage((prevPage) => prevPage + 1);
      let response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=ec43d86c021647c7972a20f8c1fd316f&page=${page}&pageSize=20`
      );
      let result = await response.json();
      setArticle(result.articles ? result.articles : null);
    }
  };
  let handlePrevBtn = async () => {
    setArticle(null);
    setPage((prevPage) => prevPage - 1);
    let response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=ec43d86c021647c7972a20f8c1fd316f&page=${page}&pageSize=20`
    );
    let result = await response.json();
    setArticle(result.articles);
  };
  if (articles === null) {
    return (
      <div className="container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container my-3">
        <h1 className="text-white text-center">GetNEWS Top Headlines</h1>
        <div className="row">
          {articles.map((v) => {
            return (
              <div className="col-md 4" key={v.url}>
                <NewsItems
                  title={v.title}
                  description={v.description}
                  imageURL={v.urlToImage}
                  newsURL={v.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={page <= 1 ? true : false}
            onClick={handlePrevBtn}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={handleNextBtn}
            disabled={page + 1 > Math.ceil(totalResults / 20)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
};
export default News;
