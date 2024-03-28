import { useEffect, useState } from "react";
import img from "../assets/news.png";

const Items = () => {
  const boxStyle = `bg-neutral rounded-md flex flex-col border border-neutral-800 text-sm text-center`;
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");

  const dTime = new Date("2024-03-26T15:07:21.6432101Z");
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  };

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4f2c8fa6816b4b31b730a6c3ea3fab76`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div className="flex flex-col items-center mt-3 lg:mt-6 mb-3 lg:mb-6">
      <div className="form-control">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Berita"
          className="input input-bordered w-34 md:w-auto text-center"
        />
      </div>
      <div className="grid md:grid-cols-4 auto-rows-[400px] gap-4 p-4">
        {articles
          .filter((news) => {
            return search.toLowerCase() === ""
              ? news
              : news.title.toLowerCase().includes(search);
          })
          .map((news, i) => (
            <div
              key={i}
              className={`${boxStyle} ${
                i === 0 || i === 7 || i === 10 || i === 17
                  ? "md:row-span-2 md:col-span-2"
                  : ""
              } `}
            >
              <img
                src={news.urlToImage ? news.urlToImage : img}
                alt="img"
                className="rounded-md flex-shrink-0 sm:object-cover"
                />
              <h2 className="font-semibold p-1">{news.name}</h2>
              <h2 className="font-semibold p-1">{news.title}</h2>
              <p className="font-thin p-1">{news.description}</p>
              <a href={news.url} className="font-bold">
                Read More
              </a>
              <div className="flex justify-center">
                <div className="p-2">
                  <span className="badge">{news.source.name}</span>
                  <span className="badge">{news.author}</span>
                  <span className="badge">
                    dipublish{" "}
                    {new Intl.DateTimeFormat("id", options).format(dTime)}
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Items;
