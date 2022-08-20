import React from 'react'
import Potato  from "../../src/assest/potato.jpeg"
import Awacado  from "../../src/assest/awacado.jpg"
import Redapple  from "../../src/assest/redapple.jpeg"
import Cabagge  from "../../src/assest/cabagge.webp"
import { BiRupee } from "react-icons/bi"

const Productdetails =()=>{
  return ( 
    <div className="container mt-5 mb-5">
        <div className="row">
          <h3 className="text-success text-start">Product details</h3>
          <p className="text-muted text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem fuga eos consequatur! Natus, eum totam.</p>
          <button className="btn col-2 text-white bg-success rounded-pill" type="button">CREATE NEW</button>
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
                <td ><button className='m-2 bg-success text-white'>Update</button><button className='bg-danger text-white'>Delete</button></td>
            </tr>
            <tr className='text-center'>
                <td scope="row"><b>70605</b></td>
                <td><img  src={Cabagge} width="50px" height={"50px"}/></td>
                <td><b> Cabagge</b></td>
                <td><b><BiRupee></BiRupee>16.00</b></td>
                <td><b>35kgs</b></td>
                <td ><button className='m-2 bg-success text-white'>Update</button><button className='bg-danger text-white'>Delete</button></td>
            </tr>
            <tr className='text-center'style={{backgroundColor: "lightgray"}}>
                <td scope="row"><b>70606</b></td>
                <td><img  src={Awacado} width="50px" height={"50px"}/></td>
                <td><b> Awacado</b></td>
                <td><b><BiRupee></BiRupee>45.00</b></td>
                <td><b>25kgs</b></td>
                <td ><button className='m-2 bg-success text-white'>Update</button><button className='bg-danger text-white'>Delete</button></td>
            </tr>
            <tr className='text-center'>
                <td scope="row"><b>70607</b></td>
                <td><img  src={Redapple} width="50px" height={"50px"}/></td>
                <td><b> Red Apple</b></td>
                <td><b><BiRupee></BiRupee>45.00</b></td>
                <td><b>25kgs</b></td>
                <td ><button className='m-2 bg-success text-white'>Update</button><button className='bg-danger text-white'>Delete</button></td>
            </tr>
            
            
        </tbody>
    </table>
    </div>
  )
}
export default  Productdetails