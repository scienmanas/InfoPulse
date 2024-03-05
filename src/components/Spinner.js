import React, { Component } from 'react'
import spinner from './assets/Reload-0.5s-200px.gif'

const Spinner = () => {
    return (
        <div className="w-full h-fit flex items-center justify-center">
            <img 
            className='w-20 h-20 my-6 mb-0 '
            src={spinner} 
            alt="loading"  
            />
        </div>
    )
}

export default Spinner;