import React from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'
const Nav = ()=> {
    return (
        <>
<nav className="navbar navbar-expand-lg bg-success p-3 text-center ">
        <div className='container'>
        <div ><b><AiOutlineShoppingCart className='fs-2 text-white p-1 '></AiOutlineShoppingCart></b></div>
        <Link to='./home' className="navbar-brand text-white " > Big Basket</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to='./home' className="nav-link text-white" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='./home' className="nav-link text-white" >Product</Link>
        </li>
        </ul>
       <div className='text-end col-10 '><Link to='./home' className='text-decoration-none text-white'>Admin</Link></div>
      </div>
      </div>
  </nav>
  </>
    )
}
export default Nav