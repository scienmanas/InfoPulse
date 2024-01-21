import React, { Component } from 'react'
import { CiGlobe } from "react-icons/ci";
import { TfiAnnouncement } from "react-icons/tfi";
import './style/newsitem.css'

export default class NewsItems extends Component {

  render() {
    // let {title, description, imgUrl} = this.props;
    return (
      <div className="card pb-[2px] bg-white-200 shadow-2xl rounded-lg flex flex-col gap-y-3 w-[320px] items-center h-[470px]">
        <div className="image h-auto w-auto justify-normal">
          <img src="https://ichef.bbci.co.uk/news/1024/branded_news/184F5/production/_132337599_gettyimages-1161147027.jpg"
            className='rounded-t-lg'
            alt="news"
          />
        </div>
        <div className="text-content px-3 h-full flex flex-col justify-between ">
          <div className="up flex flex-col">
            <p className='category flex flex-row items-center gap-x-1'><TfiAnnouncement className='text-slate-700' /><span className='text-blue-600 animate-pulse text-sm font-bold type-font'>News Mania</span> </p>
            <h1 className='title-font mt-1'>Sachin Tendulkar: Indian cricket legend warns of 'disturbing' deepfake video
            </h1>
            <p className='description-font mt-6'>The fake video appears to show Sachin Tendulkar promoting an online gaming app</p>
          </div>
          <div className="bottoms flex flex-col">
            <div className="line w-full rounded-xl p-0 h-[1.5px] bg-slate-400"></div>
            <div className="content-down items-center justify-between py-1 flex flex-row">
              <div className="date text-2xl font-date">21 Jan 2024</div>
              <div className="links flex flex-row items-center gap-2">
                <div className="author-news w-fit h-fit">
                  <p className='w-fit h-fit text-sm font-source'>BBC News</p>
                </div>
                <div className="source-link">
                  <a href="#"><CiGlobe  className='text-xl'/></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}
