import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong sticky-top">
  <div className="container-fluid">
    <a className="navbar-brand">CRYPTO</a>
    <form className="d-flex input-group w-auto">
      <input
        
        type="search"
        className="form-control rounded bg-dark"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-none bg-dark" id="search-addon">
        <i className="fas fa-search text-white"></i>
      </span>
    </form>
  </div>
</nav>
  )
}

export default Navbar