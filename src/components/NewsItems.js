import React, { Component } from 'react'
import { CiGlobe } from "react-icons/ci";
import { TfiAnnouncement } from "react-icons/tfi";
import './style/newsitem.css'

export default class NewsItems extends Component {

  render() {
    let { title, description, type, imgUrl , url, author ,date} = this.props;
    return (
      <div className="card pb-[2px] bg-white-200 shadow-2xl rounded-lg flex flex-col gap-y-3 w-[320px] items-center h-[470px]">
        <div className="image h-80 w-auto justify-normal">
          <img src={imgUrl}
            className='rounded-t-lg pointer-events-none h-48 w-auto'
            alt="news_image"
          />
        </div>
        <div className="text-content px-3 h-full flex flex-col justify-between ">
          <div className="up flex flex-col">
            <p className='category flex flex-row items-center gap-x-1'><TfiAnnouncement className='text-slate-700 ' /><span className='text-blue-600 animate-pulse text-sm font-bold type-font select-none'>{type}</span> </p>
            <a href={url}>
              <h1 className='title-font mt-1'> 
                {title.split(/\s+/).filter((element) => { return element.length !== 0}).length > 15 ?title.slice(0,93) + "..." : title  }
              </h1>
            </a>
            <p className='description-font mt-6'>
              {description.split(/\s+/).filter((element) => { return element.length !== 0}).length > 15 ?description.slice(0,110) + "..." : description  }
            </p>
          </div>
          <div className="bottoms flex flex-col">
            <div className="line w-full rounded-xl p-0 h-[1.5px] bg-slate-400"></div>
            <div className="content-down items-center justify-between py-1 flex flex-row">
              <div className="date text-2xl font-date">{date}</div>
              <div className="links flex flex-row items-center gap-2">
                <div className="author-news w-fit h-fit">
                  <p className='w-fit h-fit text-sm font-source'>{author}</p>
                </div>
                <div className="source-link">
                  <a href={url}><CiGlobe className='text-xl active:scale-75 duration-100' /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
