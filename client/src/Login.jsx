import React from 'react';


const Login = () => {
    return(
        <>

          <section className="signup">
             <div className="container mt-5">
                 <div className="signup-content">
                 <div className="signup-from">
        <h1> Log In</h1>
       
        <form>
        <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>

  </div>


  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="password" placeholder="Password"/>
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

export default Login