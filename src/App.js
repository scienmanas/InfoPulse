import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import FrontView from './components/FrontView';
import News from './components/News';
import Footer from './components/Footer';

import React, { Component } from 'react'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light',
      countryCode: 'in',
      category: 'sports'
    }
  }


  componentDidMount() {
    document.body.style.backgroundColor = '#f5f5f2';
  }



  handleToggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode: 'dark'
      })
    }
    else {
      this.setState({
        mode: 'light'
      })
    }
  }

  render() {
    return (
      <>
        <Navbar countryCode={this.state.countryCode} category={this.state.category} />
        <FrontView />
        {console.log(this.state.countryCode)}
        {console.log(this.state.category)}
        < News pageSize={10} country={this.state.countryCode} category={this.state.category} mode={this.state.mode} handleMode={this.handleToggleMode} />
        < Footer />
      </>
    )
  }
}
