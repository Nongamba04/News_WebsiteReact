import React, { Component } from 'react'
import logo from './news.png'
import './style.css'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top bg-body-tertiary shadow">
          <div className="container-fluid">
            <div className='logo-nav d-flex'>

            <div className='logo'><Link className="navbar-brand" to="/"><img src={logo}/>NEWS</Link></div>
            

            <div className="navbar-list">
              <ul className='d-flex'>
                <li className="nav-item"><Link to="/" className="nav-link dropdown-item" aria-current="page">Top Headlines</Link></li>
                <li className="nav-item"><Link to="/Health" className="nav-link dropdown-item" aria-current="page">Health</Link></li>
                <li className="nav-item"><Link to="/Technology" className="nav-link dropdown-item" aria-current="page">Technology</Link></li>
                <li className="nav-item"><Link to="/Sports" className="nav-link dropdown-item" aria-current="page">Sports</Link></li>
                <li className="nav-item"><Link to="/Entertainment" className="nav-link dropdown-item" aria-current="page">Entertainment</Link></li>
              </ul>
            </div>
            </div>

            <div className='search-bar'>

            <form className="d-flex" role="search">
              <input className="search-bar form-control me-2 co" type="search" placeholder="Search" aria-label="Search"  onChange={this.props.handleSearch}/>
              <button className="btn btn-outline-dark" type="submit" onClick={this.props.handleSearchSubmit}>Search</button>
            </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;


