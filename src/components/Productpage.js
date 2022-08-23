import React from 'react'
import Potato  from "../../src/assest/potato.jpeg"
import Awacado  from "../../src/assest/awacado.jpg"
import Redapple  from "../../src/assest/redapple.jpeg"
import Cabagge  from "../../src/assest/cabagge.webp"
import { BiRupee } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"

const Productpage  = () => {
  return (
  <React.Fragment>
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
              <Link to='/Productpage' className="nav-link text-white" >Product</Link>
            </li>
          </ul>
          <div className='text-end col-10 '><Link to='./home' className='text-decoration-none text-white'>Admin</Link></div>
        </div>
        </div>
      </nav>
      </div>
    <div className="container mt-5 mb-5">
        <div className="row">
          <h3 className="text-success text-start">Product Product</h3>
          <p className="text-muted text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem fuga e, amet consectetur adipisicing elit.Exercitationem fuga eos consequatur! Natus, eum totam.</p>
          <div className='container row row-cols-1 row-cols-md-3 g-4'>
          <div className="card col m-3" style={{width:"15rem",height:"18rem",boxShadow: '1px 2px 9px gray'}}>
           <img src={Potato} className="card-img-top image-fluid mx-auto mt-4 border"  style={{width:"100px",height:"100px",border:"2px black"}} alt="..."/>
           <hr/>
           <div className="card-body">
           <ul class="list-group list-group-flush border">
              <li class="list-group-item">Name : Potato</li>
              <li class="list-group-item">Price :<BiRupee></BiRupee> 45.00</li>
              <li class="list-group-item">Qty : 25</li>
          </ul>
             </div>
           </div>
           <div className="card col m-3" style={{width:"15rem",height:"18rem",boxShadow: '1px 2px 9px gray'}}>
           <img src={Awacado} className="card-img-top image-fluid mx-auto mt-4 border"  style={{width:"100px",height:"100px",border:"2px black"}} alt="..."/>
           <hr/>
           <div className="card-body">
           <ul class="list-group list-group-flush border">
              <li class="list-group-item">Name : Awacado</li>
              <li class="list-group-item">Price :<BiRupee></BiRupee> 15.00</li>
              <li class="list-group-item">Qty : 35</li>
          </ul>
             </div>
           </div>
           <div className="card col m-3" style={{width:"15rem",height:"18rem",boxShadow: '1px 2px 9px gray'}}>
           <img src={Redapple} className="card-img-top image-fluid mx-auto mt-4 border"  style={{width:"100px",height:"100px",border:"2px black"}} alt="..."/>
           <hr/>
           <div className="card-body">
           <ul class="list-group list-group-flush border">
              <li class="list-group-item">Name : Redapple</li>
              <li class="list-group-item">Price :<BiRupee></BiRupee> 45.00</li>
              <li class="list-group-item">Qty : 36</li>
          </ul>
             </div>
           </div>
           <div className="card col m-3" style={{width:"15rem",height:"18rem",boxShadow: '1px 2px 9px gray'}}>
           <img src={Cabagge} className="card-img-top image-fluid mx-auto mt-4 border"  style={{width:"100px",height:"100px",border:"2px black"}} alt="..."/>
           <hr/>
           <div className="card-body">
           <ul class="list-group list-group-flush border">
              <li class="list-group-item">Name : Cabagge</li>
              <li class="list-group-item">Price :<BiRupee></BiRupee> 95.00</li>
              <li class="list-group-item">Qty : 15</li>
          </ul>
             </div>
           </div>
          </div>
          </div>
          </div>
  </React.Fragment>
    )
}
export default  Productpage