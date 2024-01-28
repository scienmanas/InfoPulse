import React, { Component } from 'react'
import spinner from './assets/Reload-0.5s-200px.gif'

export default class Spinner extends Component {
  render() {
  
    return (
        <div className="w-full items-center justify-center">
            <img src={spinner} alt="loading" />
        </div>
    )
  }
}
