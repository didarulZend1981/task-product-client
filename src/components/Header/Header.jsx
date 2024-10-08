import { Link } from "react-router-dom";
import useAuthHook from "../../providers/useAuthHook";


const Header = () => {
  const { user, logOut } = useAuthHook();
  console.log("user -----",user);
  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error))
    }
  const userName=<>
      {user?.displayName ? <div className="navbar-end"><a className="btn"><button onClick={handleLogOut}><span className="uppercase font-semibold">Log out </span></button></a></div>: <div className="navbar-end"> </div> }
  </>
  const navItems =<>
        <li className="uppercase"><Link to="/">Home</Link></li>
          
        {user?.email ? <> 

            

            
        <li className="uppercase"><Link>Wellcome <sapn className="font-semibold text-orange-700">{user?.displayName}</sapn></Link></li>
        </>
        : <> 
          <li className="uppercase"><Link to="/login">login</Link></li>
        <li className="uppercase"><Link to="/registration">registration</Link></li>
      
            </>
        }

        
        

       
  </> 
  return (
    <>
      <div className="navbar bg-base-100 px-4 fixed z-10 w-10/12 max-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navItems}
      </ul>
    </div>
    <Link to="/"><a className="btn btn-ghost text-xl"><sapn className="font-bold text-emerald-800">TASK-BD</sapn></a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItems}
    </ul>
  </div>
  {userName}
</div>
    </>
  );
};

export default Header;