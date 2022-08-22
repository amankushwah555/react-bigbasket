import React from 'react'
import Potato  from "../../src/assest/potato.jpeg"
import Awacado  from "../../src/assest/awacado.jpg"
import Redapple  from "../../src/assest/redapple.jpeg"
import Cabagge  from "../../src/assest/cabagge.webp"
import { BiRupee } from "react-icons/bi"
import{ AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"

const Productdetails =()=>{
  return ( 
    <div >
              <nav className="navbar navbar-expand-lg bg-success p-3 text-center  ">
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
          <Link to='/Productdetails' className="nav-link text-white" >Product</Link>
        </li>
      </ul>
      <div className='text-end col-10 '><Link to='./home' className='text-decoration-none text-white'>Admin</Link></div>
    </div>
    </div>
       </nav>
    <div className="container mt-5 mb-5">
        <div className="row">
          <h3 className="text-success text-start">Product details</h3>
          <p className="text-muted text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem fuga eos consequatur! Natus, eum totam.</p>
         <Link to="/createnewproduct"> <button className="btn col-2 text-white bg-success rounded-pill" type="button">CREATE NEW</button></Link>
       </div>
    <table className="table mt-2">
        <thead>
            <tr className='bg-black text-white text-center '>
                <th>SNO</th>
                <th>Product</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Qty</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
            <tr className='text-center' style={{ backgroundColor: "lightgray"}}>
                <td scope="row"><b>70604</b></td>
                <td><img  src={Potato} width="50px" height={"50px"}/></td>
                <td><b> Potato</b></td>
                <td><b><BiRupee></BiRupee>45.00</b></td>
                <td><b>25kgs</b></td>
                <td ><Link to="/updateproduct"><button className='rounded-pill m-2 bg-success text-white'>Update</button></Link><button className='rounded-pill bg-danger text-white'>Delete</button></td>
            </tr>
            <tr className='text-center'>
                <td scope="row"><b>70605</b></td>
                <td><img  src={Cabagge} width="50px" height={"50px"}/></td>
                <td><b> Cabagge</b></td>
                <td><b><BiRupee></BiRupee>16.00</b></td>
                <td><b>35kgs</b></td>
                <td ><Link to="/updateproduct"><button className='rounded-pill m-2 bg-success text-white'>Update</button></Link><button className='rounded-pill bg-danger text-white'>Delete</button></td>
            </tr>
            <tr className='text-center'style={{backgroundColor: "lightgray"}}>
                <td scope="row"><b>70606</b></td>
                <td><img  src={Awacado} width="50px" height={"50px"}/></td>
                <td><b> Awacado</b></td>
                <td><b><BiRupee></BiRupee>45.00</b></td>
                <td><b>25kgs</b></td>
                <td ><Link to="/updateproduct"><button className='rounded-pill m-2 bg-success text-white'>Update</button></Link><button className='rounded-pill bg-danger text-white'>Delete</button></td>
            </tr>
            <tr className='text-center'>
                <td scope="row"><b>70607</b></td>
                <td><img  src={Redapple} width="50px" height={"50px"}/></td>
                <td><b> Red Apple</b></td>
                <td><b><BiRupee></BiRupee>45.00</b></td>
                <td><b>25kgs</b></td>
                <td ><Link to="/updateproduct"><button className='rounded-pill m-2 bg-success text-white'>Update</button></Link><button className='rounded-pill bg-danger text-white'>Delete</button></td>
            </tr>
            
            
        </tbody>
    </table>
    </div>
    </div>
  )
}
export default  Productdetails