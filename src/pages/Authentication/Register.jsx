import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthHook from "../../providers/useAuthHook";
import SocialLogin from "./SocialLogin";

import Swal from 'sweetalert2'

const Register = () => {
  const [showPassword,setShowPassword]=useState(false);
  const {createUser,user,setUser,updateUserProfile,setLoading} = useAuthHook();
  const navigate = useNavigate();
  const location = useLocation();
  // const from = navigate(location?.state?location.state:'/login');
  const from = location?.state || "/";
  
const handleRegis = async e => {
e.preventDefault()
const form = e.target
const email = form.email.value
const name = form.name.value
// const photo = form.photo.value
const pass = form.password.value
console.log({ email, pass, name })
try {
    //2. User Registration
    const result = await createUser(email, pass)
    // console.log(result)
    await updateUserProfile(name)
    // setUser({ ...user, photoURL: photo, displayName: name })
    setLoading(false);
    navigate(from);
   
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'User created successfully.',
        showConfirmButton: false,
        timer: 1500
    });
     navigate(from);
    // photoURL: photo,
    setUser({ ...user, displayName: name })
  } catch (err) {
    // console.log(pass);
    // console.log(err)
    // toast.error(err?.message)
    Swal.fire({
      icon: "error",
      title: err?.message,
      
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  
}

  return (
    <div>
    <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col lg:flex-row">
         <div className="w-1/2 mr-12">
            
         </div>
         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <div className="card-body">
                 <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                 <form onSubmit={handleRegis}>
                 <label className="input input-bordered flex items-center gap-2 mb-4">
                 
  <input type="text" className="grow" placeholder="Full Name" name="name" />
  
  </label>
  <label className="input input-bordered flex items-center gap-2 mb-4">
  
  <input type="text" className="grow" placeholder="Email" name="email"/>
  
  </label>
  {/* <label className="input input-bordered flex items-center gap-2 mb-4">
  
  <input type="text" className="grow" placeholder="photo url"  name="photo" />
  </label> */}

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
                 <SocialLogin></SocialLogin>
                 <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
             </div>
         </div>
     </div>
 </div>
</div>
  );
};

export default Register;