import React, { Component } from 'react'
import NewsItems from './NewsItems'
import './style/newsitem.css'

export default class News extends Component {
  render() {
    return (
      <div className='all-news'>
        <div className="news-cards flex flex-wrap flex-row justify-evenly sm:justify-start gap-4 p-5">
         < NewsItems />

        </div>
      </div>
    )
  }
}
