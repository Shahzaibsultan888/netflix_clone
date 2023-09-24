import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
import '../Header/Header.scss'
import{GoSearch} from 'react-icons/go'
// import { icons } from 'react-icons'
const Header = () => {
    
  return (
    <nav className="header">
        <img src={logo} alt="" />
        <div className="links">
        <Link to='/tvshows'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/recentlyadded'>Recently Added</Link>
        <Link to='/mylist'>My List</Link>
      </div>
      <GoSearch className="search-icon"/>
    </nav>
  )
}

export default Header