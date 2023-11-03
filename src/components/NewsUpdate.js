import React, { Component } from 'react'
import './style.css'

export class NewsUpdate extends Component {
  render() {
    let {title,imgSrc,newsUrl,brand} = this.props;
    return (
      <div>
        <div className="card" style={{ margin : "10px",width : "25rem"}}>
        <div class="card-header ">
    {brand}
  </div>
      <img src={imgSrc} className="card-img-top" alt="No Image Available" height= "200px" width="100px"/>
      <div className="card-body">
        <div style={{height:"80px"}}>
        <h5 className="card-title">{title}...</h5>
        </div>
        
        {/* <p className="card-text">{description}...</p> */}
        <a href={newsUrl} className="btn btn-primary">Read More</a>
      </div>
      
    </div>
    </div>
    )
  }
}

export default NewsUpdate