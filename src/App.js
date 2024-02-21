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
      mode: 'light'
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
     <Navbar />
     <FrontView />
     < News pageSize={10} country="in" category="sports" mode={this.state.mode} handleMode={this.handleToggleMode}/>
     < Footer />
     </>
    )
  }
}
