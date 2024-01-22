import React, { Component } from 'react'
import spinner from './assets/spinner.svg'

export default class Spinner extends Component {
  render() {
  
    return (
        <div className="">
            <img src={spinner} alt="loading" />
        </div>
    )
  }
}
