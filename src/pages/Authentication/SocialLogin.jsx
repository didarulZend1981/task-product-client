import React from 'react';
import toast from 'react-hot-toast';

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
          // toast.success('successfully login')
          navigate(from);
          toast.success('successfully login')
         
        }
    })
}

  return (
    <>
     
     

     <button onClick={()=>handleSocialLogin(googleLogin)} className="btn btn-outline btn-primary"> Google</button>


         
    
    </>
  );
};

export default SocialLogin;