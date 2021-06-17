import React from 'react';


const Singup = () => {
    return(
        <>
           <section className="signup">
             <div className="container mt-5">
                 <div className="signup-content">
                 <div className="signup-from">
                 <h1> Sign Up</h1>

                 <form>
                 
                 <div className="form-group">
    <label for="exampleInputName">Name</label>
    <input type="Name" className="form-control" id="name" placeholder="Enter Name"/>
    
  </div>


  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>



  <div className="form-group">
    <label for="exampleInputName">Phone Number</label>
    <input type="Number" className="form-control" id="Phone"  placeholder="Enter Phone no."/>
    
  </div>



  <div className="form-group">
    <label for="exampleInputName">College Name</label>
    <input type="Name" className="form-control"  id="work" placeholder="Enter College Name "/>
    
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password"/>
  </div>

  <div className="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

                </div>

                 </div>
             </div>

           </section>


        </> 
    )
}

export default Singup