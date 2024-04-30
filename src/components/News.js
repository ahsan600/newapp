import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import defaultImg from "./defaultimg.png";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { demoData } from "./demoData";
export default function News(props) {
  const demoDataNews = demoData;
  const [articles, setArticles] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [checkTotalNew, setcheckTotalNew] = useState([]);
  const fetchDate = async () => {
    //Get Your Api From Here: https://newsapi.org/
    const apiKey = "";
    if (apiKey !== "") {
      props.checkprogress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=10`;
      document.title = `NewsNest - ${capitalizeFirstLetter(props.category)}`;
      setLoading(true);
      props.checkprogress(20);
      let fetchData = await fetch(url);
      props.checkprogress(40);
      let praseDate = await fetchData.json();
      props.checkprogress(60);
      if (praseDate.code !== "rateLimited") {
        const filterNews = praseDate.articles.filter(
          (result) => result.title !== "[Removed]"
        );
        props.checkprogress(100);
        await setArticles(filterNews);
        await setTotalResult(praseDate.totalResults);
        await setLoading(false);
        setcheckTotalNew(praseDate.articles);
      } else {
        props.checkprogress(100);
        await setLoading(false);
        // 9ab42a1f91eb41a2897b21e219781749
      }
    } else {
      // console.log(demoDataNews.articles);
      setArticles(demoDataNews.articles);
      setcheckTotalNew(demoDataNews.articles);
    }
  };
  useEffect(() => {
    fetchDate();
    // eslint-disable-next-line
  }, []);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const fetchMoreData = async () => {
    //Get Your Api From Here: https://newsapi.org/ //
    const apiKey = "";
    if (apiKey !== "") {
      const nextPage = page + 1; // Use the updated page value
      await setPage(nextPage); // Update the page state variable
      props.checkprogress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=${apiKey}&page=${nextPage}&pageSize=10`; // Use the updated page value

      props.checkprogress(20);
      let fetchData = await fetch(url);
      props.checkprogress(40);
      let praseDate = await fetchData.json();
      props.checkprogress(60);
      const filterNews = praseDate.articles.filter(
        (result) => result.title !== "[Removed]"
      );
      props.checkprogress(100);

      setArticles((prevArticles) => [...prevArticles, ...filterNews]);
      setTotalResult(praseDate.totalResults);

      setcheckTotalNew((prevArticles) => [
        ...prevArticles,
        ...praseDate.articles,
      ]);
    } else {
      setArticles(demoDataNews.articles);
      setcheckTotalNew(demoDataNews.articles);
    }
  };

  return (
    <>
      <div className="container">
        <h4 className="text-center" style={{ marginTop: "89px" }}>
          {`NewsNest - Top ${capitalizeFirstLetter(props.category)}
          Handlines`}
        </h4>
        {loading && <Spinner />}
      </div>
      {checkTotalNew.length !== 0 ? (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={checkTotalNew.length !== totalResult}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row my-4">
              {articles.map((result, index) => (
                <div className="col-md-4" key={index}>
                  <Newsitems
                    title={result.title ? result.title : ""}
                    desc={result.description ? result.description : ""}
                    imgUrl={result.urlToImage ? result.urlToImage : defaultImg}
                    newsUrl={result.url}
                    source={result.source.name}
                    author={result.author}
                    publishedAt={result.publishedAt}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      ) : (
        <h2
          className="text-center"
          style={{
            height: "30vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          There No News Available Right Now...{" "}
        </h2>
      )}
    </>
  );
}
