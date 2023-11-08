
import React from 'react'
import logo from './logo.png'
import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';




export default function Navbar({userData,logout}) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg p-0 m-0 shadow-lg p-3 mb-3 rounded  `}>
  <div className="container ">
    <Link className="  navbar-brand  text-center  " to="home">
      
        <div className='d-flex align-items-end text-center '>
        
        <img className={`${style.img}`} src={logo} alt="" />
        
        <h4 className={`${style.txt}`}>Game Over</h4>
        </div>
        
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     {userData? <ul className="navbar-nav me-auto mb-2 mb-lg-0  ms-5">
        <li className={`nav-item `}>
          <Link className=" home nav-link active text-light " aria-current="page" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="all">All</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="plat" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Platforms 
          </Link>
          <ul className="dropdown-menu ">
            <li><Link className="dropdown-item " to="/platform/pc">PC</Link></li>
            <li><Link className="dropdown-item" to="/platform/browser">browser</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="sort-by" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          sort-by 
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/sort-by/release-data">release-data</Link></li>
            <li><Link className="dropdown-item" to="/sort-by/popularity">popularity</Link></li>
            <li><Link className="dropdown-item" to="/sort-by/alphabetical">alphabetical</Link></li>
            <li><Link className="dropdown-item" to="/sort-by/relevance">relevance</Link></li>
            
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/Categories/racing">racing</Link></li>
            <li><Link className="dropdown-item" to="/Categories/sports">sports</Link></li>
            <li><Link className="dropdown-item" to="/Categories/social">social</Link></li>
            <li><Link className="dropdown-item" to="/Categories/shooter">shooter</Link></li>
            <li><Link className="dropdown-item" to="/Categories/open-world">open-world</Link></li>
            <li><Link className="dropdown-item" to="/Categories/zombie">zombie</Link></li>
            <li><Link className="dropdown-item" to="/Categories/fantasy">fantasy</Link></li>
            <li><Link className="dropdown-item" to="/Categories/action-rpg">action-rpg</Link></li>
            <li><Link className="dropdown-item" to="/Categories/action">action</Link></li>
            <li><Link className="dropdown-item" to="/Categories/flight">flight</Link></li>
            <li><Link className="dropdown-item" to="/Categories/battle-royale">battle-royale</Link></li>
            
          </ul>
        </li>
        
      
      </ul>:''}

      
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {userData?<li className="nav-item">
          <Link className="nav-link active" aria-current="page" onClick={logout} to="login"><button type="button" class="btn btn-outline-primary">Log Out</button></Link>
        </li>:<>
        
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="login">Login</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="regaister">Regaister</Link>
        </li>
       
        </>
       }
        
        
      
      </ul>
      
      
    </div>
  </div>
</nav>

    
    </>
  )
}
