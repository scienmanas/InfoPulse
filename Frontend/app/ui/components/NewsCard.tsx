import { CiGlobe } from "react-icons/ci";
import { TfiAnnouncement } from "react-icons/tfi";
import { NewsCardProps } from "@/app/lib/definition";
import defaultImage from "@/public/assets/misc/news.jpeg";
import Link from "next/link";
import Image from "next/image";

export function NewsCard({
  // _id,
  headline,
  description,
  category,
  publisher,
  date,
  image_link,
  news_link,
}: NewsCardProps): JSX.Element {
  const dispDate = new Date(parseInt(date, 10));
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const fomrmattedDate: string = Intl.DateTimeFormat("en-US", options).format(
    dispDate
  ) as string;

  return (
    <div className="card pb-[2px] bg-white-200 shadow-2xl rounded-lg flex flex-col gap-y-3 w-[300px] sm:w-[280px] md::w-[320px] items-center h-[470px] relative">
      <div className="image h-[21rem] w-auto flex overflow-hidden items-center">
        <img
          src={image_link}
          className="rounded-t-lg pointer-events-none w-auto h-auto"
          alt="news_image"
          height={320}
          width={320}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = defaultImage.src;
          }}
        />
      </div>
      <div className="text-content px-3 h-full flex flex-col justify-between ">
        <div className="up flex flex-col">
          <p className="category flex flex-row items-center gap-x-1">
            <TfiAnnouncement className="text-slate-700 " />
            <span className="text-blue-600 animate-pulse text-sm font-bold type-font select-none">
              {category} - News
            </span>
          </p>
          <Link href={news_link}>
            <h1 className="title-font mt-1">
              {headline.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length > 15
                ? headline.slice(0, 93) + "..."
                : headline}
            </h1>
          </Link>
          <p className="description-font mt-6">
            {description.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length > 15
              ? description.slice(0, 110) + "..."
              : description}
          </p>
        </div>
        <div className="bottoms flex flex-col">
          <div className="line w-full rounded-xl p-0 h-[1.5px] bg-slate-400"></div>
          <div className="content-down items-center justify-between py-1 flex flex-row">
            <div className="date text-2xl font-date">{fomrmattedDate}</div>
            <div className="links flex flex-row items-center gap-2">
              <div className="author-news w-fit h-fit">
                <p className="w-fit h-fit text-sm font-source">{publisher}</p>
              </div>
              <div className="source-link">
                <Link href={news_link}>
                  <CiGlobe className="text-xl active:scale-75 duration-100" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
