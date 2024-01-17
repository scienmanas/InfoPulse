import React, { Component } from 'react';
import backgroundImage from './assets/website-bg.png';
import showup_1 from './assets/showup-1.png'
import showup_2 from './assets/showup-2.png'
import './style/fontview.css'

export default class FrontView extends Component {
    render() {
        return (
            <div className='bg-font-view'>
                <div className="image relative h-fit w-full">
                    <img
                        src={backgroundImage}
                        alt="backgound-image"
                        className='w-full object-cover pointer-events-none'
                        style={{ height: '650px' }}
                    />
                    <div className="text text-font-frontview absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center pointer-events-none transform perspective-3xl ">
                        <div className="text-white">News Monkey!</div>
                        <div className='text-white leading-tight'>Your daily dose of news is here</div>
                    </div>
                    <div className="image-1 absolute top-28 right-8 rotate-12 border-8 rounded-md shadow-2xl shadow-gray-300 ">
                        <img
                            src={showup_1}
                            alt=""
                            className='object-cover w-60 h-fit '
                        />
                    </div>
                    <div className="image-2 absolute top-52 right-28 -rotate-12 border-8 rounded-md shadow-2xl shadow-gray-300">
                        <img
                            src={showup_2}
                            alt=""
                            className='object-cover w-60 h-fit '
                        />
                    </div>
                </div>
            </div>
        )
    }
}
