import React from 'react';

import Swal from 'sweetalert2'

import useAuthHook from '../../providers/useAuthHook';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const {googleLogin,setLoading} =useAuthHook();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const handleSocialLogin = socialProvider =>{

    socialProvider().then(result=>{
        if(result.user){
          setLoading(false);
         
          navigate(from);
          
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'successfully login.',
              showConfirmButton: false,
              timer: 1500
          });
        }
    })
}

  return (
    <>
     
     

     <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline btn-secondary"> Google</button>


         
    
    </>
  );
};

export default SocialLogin;