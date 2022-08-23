import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import Background  from "../../src/assest/background.jpg"


const Home = () => {
  return (
    <React.Fragment>
        <div style={{ backgroundImage:`url(${Background})`,
 height: '100vh', backgroundPosition:'center', 
 backgroundRepeat: 'no-repeat',
 backgroundSize: 'cover' 
 }
}> 
    <div><nav className="navbar navbar-expand-lg bg-success p-3 text-center  ">
    <div className='container'>
        <div ><b><AiOutlineShoppingCart className='fs-2 text-white p-1 '></AiOutlineShoppingCart></b></div>
        <Link to='' className="navbar-brand text-white " > Big Basket</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to='/home' className="nav-link text-white" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/productpage' className="nav-link text-white" >Product</Link>
            </li>
          </ul>
          <div className='text-end col-10 '><Link to='./home' className='text-decoration-none text-white'>Admin</Link></div>
        </div>
        </div>
      </nav>
      </div>
      <div className='m-5 p-5 text-white'>
        <h1 className='text-center mt-5 pt-5'><b><AiOutlineShoppingCart className='fs-1 text-white p-1 '></AiOutlineShoppingCart></b>Big Basket</h1>
        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type .</p>
      </div>
      </div>
      </React.Fragment>
  )
}
export default Home