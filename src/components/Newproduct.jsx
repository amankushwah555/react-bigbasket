import React from 'react'
import Nav from './Nav'
import {Link} from 'react-router-dom';



const Newproduct = ()=> {
    return (
        <>

        <Nav />
        
        <div className="container mt-5 mb-5">
        <div className="row">
          <h3 className="text-success text-start">Create New Product</h3>
          <p className="text-muted text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Exercitationem fuga eos consequatur! Natus, eum totam.</p>
          
            <div className="col-md-4 ">
                <div className="card text-center">
                    <div className="card-header text-start text-white bg-secondary">
                       <p className="mt-0 mb-0 "><b>New Product</b></p> 
                    </div>
                    <div className="card-body text-start">
                      
                  
                      <div class="input-group mb-3">
  
                     <input type="text" class="form-control" placeholder="Product Name" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                      
                      
                      <div class="input-group mt-3 ">
                      <input type="text" className="form-control" placeholder="Product Image" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                      <button className="btn btn-outline-secondary" type="button" id="button-addon2">Browse</button>
                      </div>

                      
                      <div class="input-group mt-3">
  
                     <input type="text" class="form-control" placeholder="Price" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                      
                      <div class="input-group mt-3">
  
                     <input type="text" class="form-control" placeholder="Available Qty" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                      
                      <div className="form-floating mt-3">
                      <textarea className="form-control" placeholder="General Info" id="floatingTextarea"></textarea>
                      <label for="floatingTextarea">General Info</label>
                      </div>
                      
                    </div>
                    <div className="card-footer text-muted text-start bg-white">
                      <button type="button" className="btn btn-success rounded-pill px-3">Create</button>
                      
                    </div>
                  </div>

            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
        </div>
    </div>
   
        

        </>

    )

}
export default Newproduct
