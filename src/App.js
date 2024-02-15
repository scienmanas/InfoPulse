import './App.css';
import Navbar from './components/Navbar';
import FrontView from './components/FrontView';
import News from './components/News';
import Footer from './components/Footer';

import React, { Component } from 'react'

export default class App extends Component {
  

  componentDidMount() {
    document.body.style.backgroundColor = '#f5f5f2';
  }
  render() {
    return (
      <>
     <Navbar />
     <FrontView />
     {/* < News pageSize={10} country="in" category="sports"/> */}
     < Footer />
     </>
    )
  }
}
