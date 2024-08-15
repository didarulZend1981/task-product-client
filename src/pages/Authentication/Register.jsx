import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
  const [showPassword,setShowPassword]=useState(false);
  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col lg:flex-row">
         <div className="w-1/2 mr-12">
            
         </div>
         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <div className="card-body">
                 <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                 <form onSubmit="#">
                 <label className="input input-bordered flex items-center gap-2 mb-4">
                 
  <input type="text" className="grow" placeholder="Full Name" name="name" />
  
  </label>
  <label className="input input-bordered flex items-center gap-2 mb-4">
  
  <input type="text" className="grow" placeholder="Email" name="email"/>
  
  </label>
  <label className="input input-bordered flex items-center gap-2 mb-4">
  
  <input type="text" className="grow" placeholder="photo url"  name="photo" />
  </label>

  <label className="input input-bordered flex items-center gap-2 mb-4">
 
  <input type={showPassword ? "text": "password"} className="grow" name="password"
  placeholder="password"
  
  />
   <span onClick={()=>setShowPassword(!showPassword)}></span>
  </label>
                     <div className="form-control mt-6">
                         <input className="btn btn-primary" type="submit" value="Sign Up" />
                     </div>
                 </form>
                 <div>
                   
                 </div>
                 <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
             </div>
         </div>
     </div>
 </div>
</div>
  );
};

export default Register;