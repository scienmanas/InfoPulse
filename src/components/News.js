import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import './style/news.css'
import default_img from './assets/default_img.png'

export default class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      total_pages: 0,
      page: 1
    }
  }

  async componentDidMount() {
    // console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1fcc98de2abe4fcc8e7ac9c339b4c4f6&pageSize=20&page=" + this.state.page

    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)

    this.setState(
      {
        articles: parsedData.articles,
        loading: true,
        page: this.state.page,
        total_pages: Math.ceil(parsedData.totalResults/20)
      }
    )
    console.log(this.state.total_pages)

     // Bind the methods to the component instance
  this.handleNextPage = this.handleNextPage.bind(this);
  this.handlePreviousPage = this.handlePreviousPage.bind(this);
  }

  formatDate(inputDate) {
    try {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(inputDate));
      return formattedDate;
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  }

  async handleNextPage() {

    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1fcc98de2abe4fcc8e7ac9c339b4c4f6&pageSize=20&page=" + (this.state.page + 1)

    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState(
      {
        page: this.state.page + 1,
        articles: parsedData.articles
      })
  }

  async handlePreviousPage() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1fcc98de2abe4fcc8e7ac9c339b4c4f6&pageSize=20&page=" + (this.state.page - 1)

    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState(
      {
        page: this.state.page - 1,
        articles: parsedData.articles
      })
  }

  render() {
    return (
      <div className='all-news flex flex-col mb-7'>
        <div className="news-cards flex flex-wrap flex-row justify-evenly gap-4 p-5">
          {this.state.articles.map((element) => {
            return < NewsItems title={element.title} description={element.description ? element.description : ""} type="News" imgUrl={element.urlToImage ? element.urlToImage : default_img} url={element.url} author={element.source.name} date={this.formatDate(element.publishedAt)} />
          })}
        </div>
        <div className="buttons justify-center items-center flex gap-6">
        <div className={`button shadow-[5px_5px_0px_0px_rgba(109,40,217)]  mt-4 lg:text-xl box-shado w-fit h-fit bg-gradient-to-r from-[#FFECD2] to-[#FCB69F] py-3 px-4 rounded-md cursor-pointer ${this.state.page === 1?'disabled_button cursor-not-allowed' : 'working-button'}`}>
            <button className={`w-fit h-fit text-transparent bg-clip-text bg-gradient-to-r from-[#C33764] to-[#1D2671] font-bold ${this.state.page === 1?'disabled_button cursor-not-allowed' : ''}`}  onClick={this.handlePreviousPage} disabled={this.state.page === 1?true : false} >Previous</button>
          </div>
          <div className={`button shadow-[5px_5px_0px_0px_rgba(109,40,217)]  mt-4 lg:text-xl box-shado w-fit h-fit bg-gradient-to-r from-[#FFECD2] to-[#FCB69F] py-3 px-4 rounded-md cursor-pointer group ${this.state.page <  this.state.total_pages?'working-button' : 'disabled_button cursor-not-allowed'}`}>
            <button className={`w-fit h-fit text-transparent bg-clip-text bg-gradient-to-r from-[#C33764] to-[#1D2671] font-bold ${this.state.page <  this.state.total_pages?'' : 'disabled_button cursor-not-allowed'}`}  onClick={this.handleNextPage} disabled={this.state.page <  this.state.total_pages?false : true} >Next </button>
          </div>
        </div>
        <Spinner />
      </div>
    )
  }
}
