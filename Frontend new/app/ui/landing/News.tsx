'use client';

import { useState , useEffect } from "react";

export default function News (category: string): JSX.Element  {

    const [isFetching, setIsFetching] = useState(true);

    const fetchData = async () => {
        // api endpount
        const API_URI = `http://localhost:5000/api/data/get-news?category=${category}&page=&limit=`

        // Hit the endpoint
        const res = await fetch(API_URI, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }


    useEffect(() => {
      first
    
      return () => {
        second
      }
    }, [third])
    




    return (
      <div className='all-news flex flex-col mb-7'>
        <div className="news-cards flex flex-wrap flex-row justify-evenly gap-4 p-5">
          {!this.state.loading && this.state.articles.map((element) => {
            return < NewsItems title={element.title} description={element.description ? element.description : ""} type={`${this.props.category} - News`} imgUrl={element.urlToImage ? element.urlToImage : default_img} url={element.url} author={element.source.name} date={this.formatDate(element.publishedAt)} handleCategoryChange={this.handleCategoryChange} handleCountryChange={this.handleCountryChange} />
          })}
        </div>
        {this.state.loading && <Spinner />}
        <div className="buttons justify-center items-center flex gap-6">
          <button className={`transition-all duration-200 button button-text shadow-[5px_5px_0px_0px_rgba(109,40,217)]  mt-4 lg:text-xl box-shado w-fit h-fit bg-gradient-to-r from-[#FFECD2] to-[#FCB69F] py-4 px-5 rounded-md ${this.state.page === 1 ? 'disabled_button cursor-not-allowed opacity-60' : 'active:translate-x-1 active:translate-y-1 active:shadow-none'}`} onClick={this.handlePreviousPage} disabled={this.state.page === 1 ? true : false}>
            <div className="w-fit h-fit text-transparent bg-clip-text bg-gradient-to-r from-[#C33764] to-[#1D2671] font-bold">
              <span className="select-none">Previous</span>
            </div>
          </button>
          <button className={`transition-all duration-200 button button-text shadow-[5px_5px_0px_0px_rgba(109,40,217)]  mt-4 lg:text-xl box-shado w-fit h-fit bg-gradient-to-r from-[#FFECD2] to-[#FCB69F] py-4 px-5 rounded-md ${this.state.page < this.state.total_pages ? 'working-button' : 'disabled_button cursor-not-allowed'}`}
            onClick={this.handleNextPage}
            disabled={this.state.page < this.state.total_pages ? false : true}>
            <div className="w-fit h-fit text-transparent bg-clip-text bg-gradient-to-r from-[#C33764] to-[#1D2671] font-bold">
              <span className="select-none">Next</span>
            </div>
          </button>

        </div>
      </div>
    )
  }
