import React from 'react';


const Contact = () => {
    return(
        <>
        <br></br>
        <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Phone Number</h5>
        <p class="card-text">+91-8822234564</p>
        
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Email Address</h5>
        <p class="card-text">adikumar1238@gmail.com</p>
   
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Address</h5>
        <p class="card-text">Bangalore, India</p>
        
      </div>
    </div>
  </div>
</div>




<section className="signup">
             <div className="container mt-5">
                 <div className="signup-content">
                 <div className="signup-from">
        <h1>Apply For College</h1>
       
        <form id="contact_form">
        <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>

  <div className="form-group">
    <label for="exampleInputName">Name</label>
    <input type="Name" className="form-control" id="name" placeholder="Enter Name"/>
    
  </div>

  <div className="form-group">
    <label for="exampleInputName">College Name</label>
    <input type="Name" className="form-control"  id="work" placeholder="Enter College Name "/>
    
  </div>


  <div class="form-group">
    <label for="exampleFormControlTextarea1">Type Letter to the College</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="13"></textarea>
  </div>

  <button type="submit" className="btn btn-primary">Apply</button>
</form>
</div>
 </div>
             </div>

           </section>
















        </>
    )
}

export default Contact