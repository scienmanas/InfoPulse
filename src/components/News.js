import React, { Component } from 'react'
import NewsItems from './NewsItems'
import './style/newsitem.css'

export default class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1fcc98de2abe4fcc8e7ac9c339b4c4f6";

    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)

    this.setState(
      {
        articles: parsedData.articles
      }
    )
  }


  render() {
    return (
      <div className='all-news'>
        <div className="news-cards flex flex-wrap flex-row justify-evenly sm:justify-start gap-4 p-5">
        {this.state.articles.map((element) => {
            return   < NewsItems title={element.title} description={element.description} type="News" imgUrl={element.urlToImage} url={element.url} author="rgr" date={element.publishedAt} />
          })}
        </div>
      </div>
    )
  }


}


//   render() {
//     return (
//       <div className='all-news'>
//         <div className="news-cards flex flex-wrap flex-row justify-evenly sm:justify-start gap-4 p-5">
//           {this.state.articles.map((element) => {
//             return   < NewsItems title={element.title} description={element.description} type="News" imgUrl={element.urlToImage} url={element.url} author="rgr" date={element.publishedAt} />
//           })}
//         </div>
//       </div>
//     )
//   }
