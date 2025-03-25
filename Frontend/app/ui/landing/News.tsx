"use client";

import { useState, useEffect, useRef } from "react";
import { NewsCard } from "@/app/ui/components/NewsCard";
import { FetchNewsLoader } from "@/app/ui/loaders";
import { NewsCardProps } from "@/app/lib/definition";
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll";

export function News(): JSX.Element {
  const countriesList = [
    {
      country: "India",
      code: "in",
    },
    {
      country: "Brazil",
      code: "br",
    },
    {
      country: "Canada",
      code: "ca",
    },
    {
      country: "France",
      code: "fr",
    },
    {
      country: "Japan",
      code: "jp",
    },
    {
      country: "United States",
      code: "us",
    },
  ];

  const categoryList = [
    "world",
    "general",
    "nation",
    "buisness",
    "technology",
    "entertainment",
    "sports",
    "science",
    "health",
  ];

  const [isFetching, setIsFetching] = useState(true);
  const [newsData, setNewsData] = useState<NewsCardProps[]>([]);
  const [allItemsFetched, setAllItemsFetched] = useState(false);
  const [page, setPage] = useState(1);
  const [configuration, setConfiguration] = useState({
    category: "world",
    country: "in",
    limit: 105,
  });

  const fetchData = async () => {
    // loader
    setIsFetching(true);

    try {



      // api endpount
      const API_URI = `https://infopulse.onrender.com/api/data/get-news?category=${configuration.category}&page=${page}&limit=${configuration.limit}&country=${configuration.country}`;

      // Hit the endpoint
      const res = await fetch(API_URI, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check status code
      if (res.status === 200) {
        // parse the data
        const data = await res.json();
        if (data.total_pages <= page) {
          setAllItemsFetched(true);
          setIsFetching(false);
          return;
        }
        setNewsData((updateData) => [
          ...updateData,
          ...data.news, // Assuming `data.news` is an array of news items
        ]);

        // update page number
        setPage(page + 1);

        // Stop the loader
        setIsFetching(false);
      } else {
        console.log("Some error occurred");
        setIsFetching(false);
        window.location.href = '/error'
      }
    }
    catch (error) {
      console.log("Some error occurred");
      setIsFetching(false);
      window.location.href = '/error'
    }
  };

  useEffect(() => {
    setPage(1);
    setNewsData([]);
    setAllItemsFetched(false);
    fetchData();
  }, [configuration]);

  const lastElementRef = useInfiniteScroll(
    fetchData,
    isFetching,
    allItemsFetched
  );

  return (
    <div id="news" className="all-news flex flex-col gap-2">
      <div className="options-and-filter sm:px-10 sm:py-2 flex flex-row w-full items-center justify-center sm:justify-start">
        <div className="option-warpper flex flex-row w-fit gap-4">
          <div className="news-category">
            <select
              className="rounded-lg p-2 border-[2px] border-blue-400 bg-gray-200 font-semibold  hover:border-yellow-600"
              defaultValue={`world`}
              onChange={async (e) => {
                const target = e.target as HTMLSelectElement;
                // update the state
                setConfiguration((prev) => ({
                  ...prev,
                  category: target.value,
                }));
              }}
            >
              {categoryList.map((category) => (
                <option value={category} key={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="news-country">
            <select
              className="rounded-lg p-2 border-[2px] border-blue-400 bg-gray-200 font-semibold  hover:border-yellow-600"
              defaultValue={`in`}
              onChange={(e) => {
                const target = e.target as HTMLSelectElement;
                // update the state
                setConfiguration((prev) => ({
                  ...prev,
                  country: target.value,
                }));
              }}
            >
              {countriesList.map((countryData) => (
                <option value={countryData.code} key={countryData.code}>
                  {countryData.country}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="news-cards flex flex-wrap flex-row justify-evenly gap-4 p-5">
        {newsData.map((news) => {
          return (
            <NewsCard
              key={news._id}
              headline={news.headline}
              description={news.description}
              category={news.category}
              publisher={news.publisher}
              date={news.date}
              image_link={news.image_link}
              news_link={news.news_link}
            />
          );
        })}
        <div
          ref={lastElementRef}
          className={`${allItemsFetched ? "hidden" : ""}`}
        />
      </div>
      <div className="loader justify-center items-center flex w-full">
        {isFetching && <FetchNewsLoader />}
      </div>
    </div>
  );
}
