import './App.css';
import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Routes, Route} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  // q = encodeURIComponent(q);  
apikey = 'af6e3dde0dbf4ba98034ac188e96502f';
state = {
  progress : 0,
}

setProgress = (progress) =>{
  this.setState({progress: progress})
}

  render() {
    return (
      <div>
       <Navbar />
       <LoadingBar
       color= '#f11946'
       progress= {this.state.progress}/>
       <Routes>
        <Route path="/" element={<News setProgress={this.setProgress} key="general" category="general" apikey = {this.apikey}/>}></Route> 
        <Route path="/Health" element={<News setProgress={this.setProgress} key="health" category="health" apikey = {this.apikey}/>}></Route> 
        <Route path="/Technology" element={<News setProgress={this.setProgress} key="technology" category="technology" apikey = {this.apikey}/>}></Route> 
        <Route path="/Sports" element={<News setProgress={this.setProgress} key="sports" category="sports" apikey = {this.apikey}/>}></Route> 
        <Route path="/Entertainment" element={<News setProgress={this.setProgress} key="entertainment" category="entertainment" apikey = {this.apikey}/>}></Route> 
       </Routes>
       
      </div>
    )
  }
}

