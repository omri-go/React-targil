import React from 'react'
import {Link} from "react-router-dom";
const MyNavbar = () => {
  return (
    <div>



<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className='btn btn-info' to="/boot">mrilya</Link>{" "}|
        </li>
        <li className="nav-item">
        <Link className='btn btn-success' to="/waga">waga</Link>{" "}|
        </li>
        <Link className='btn btn-danger' to="/baga">bagaaaaaaaaaaaa</Link>{" "}|
        <li className="nav-item">
        <Link className='btn btn-info' to="/boot">mrilya</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default MyNavbar