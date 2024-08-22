import React, { Component } from 'react'
import NewsUpdate from './NewsUpdate'
import Spinner from './Spinner'
import style from './style.css'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'
import Navbar from './Navbar'
import App from '../App'

export class News extends Component {
 
    static defaultProps = {
        category : "general"
      }

      static props ={
        category : PropTypes.string
      }
      constructor() {
        super();
        this.state = {
            articles : [],
            loading : false,
            query:'',
            page:1
        }
      }
      
      //Fetch the data from the api
      async componentDidMount(){
        this.props.setProgress(5);
        // let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=12`;
        let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&max=15&apikey=${this.props.apikey}&page=1&pageSize=12`;
        let res = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await res.json();
        this.props.setProgress(50);
        this.setState({articles : parsedData.articles}
        
        )
        this.props.setProgress(100);
      }

      handleSearch = (event)=>{
        this.setState({query : event.target.value})
      }

      async searchNews(){
          this.props.setProgress(5);
          // let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=12`;
          let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&apikey=${this.props.apikey}&page=1&pageSize=12`;
          let res = await fetch(url);
          this.props.setProgress(30);
          let parsedData = await res.json();
          this.props.setProgress(50);
          this.setState({articles : parsedData.articles}
          
          )
          this.props.setProgress(100);
        }

        handleSearchSubmit = ()=>{
          this.searchNews();
        }
      

      // //Previous button
      //  previousClick = async () =>{
      //   let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=12`;
      // let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&apikey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=12`;
      //   this.setState({loading : true});
      //   let res = await fetch(url);
      //   let parsedData = await res.json();
      //   this.setState({
      //       page : this.state.page - 1,
      //       articles : parsedData.articles,
      //       loading : false
      //   })
      // }
     
      // //Next button
      // nextClick = async ()=>{
        // let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=12`;
      // let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&apikey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=12`;
      //   this.setState({loading : true});
      //   let res = await fetch(url);
      //   let parsedData = await res.json();
      //   this.setState({
      //       page : this.state.page + 1,
      //       articles : parsedData.articles,
      //       loading : false
      //   })
      // }

      fetchMoreData = async () =>{
        this.setState({page : this.state.page+1, loading: true})
        // let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=12`;
        let url = `https://gnews.io/api/v4/top-headlines?category=${this.props.category}&lang=en&max=15&apikey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=12`;
        let res = await fetch(url);
        let parsedData = await res.json();
        this.setState({
        page : this.state.page,
        articles : this.state.articles.concat(parsedData.articles),
        totalResults : parsedData.totalResults,
        loading: false }
        )
      }


  render() {
    return (

         <div>
          <Navbar handleSearch = {this.handleSearch} handleSearchSubmit={this.handleSearchSubmit}/>
        <div className='container my-3'>
            <h2 className='text-center fw-bold'>Top Headlines</h2>
            <hr style={{ backgroundColor: "black", height: "10px" }} />
            <InfiniteScroll
              dataLength = {this.state.articles.length}
              next = {this.fetchMoreData}
              hasMore = {this.state.articles.length !== this.state.totalResults}
              loader={<Spinner/>}
              >
            
            {/* {this.state.query}? <App query={this.state.query}/> : <App/> */}

            <div className='row'>
                {this.state.articles.map((element)=>{ 
                return <div className="col-md-4" key ={element.url}>
                 <NewsUpdate
                title={element.title}
                // description={element.description ? element.description.slice(0, 60) : ''}
                imgSrc={element.image}
                newsUrl={element.url}
                brand={element.source.name}
              />
              </div>
                })}
            </div>
            </InfiniteScroll>
                

                {/* <div className = 'container d-flex justify-content-between ' >
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.previousClick}>Prev</button>
                <button type="button" className="btn btn-dark" onClick={this.nextClick}>Next</button>
                </div> */}
            

        </div>
        </div>
    )
  }
}

export default News