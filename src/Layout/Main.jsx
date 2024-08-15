import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Main = () => {
  return (
    <>
      <div className="h-20 shadow-lg bottom-3">
          <Header/>
      </div>
      <div className='min-h-[calc(100vh-160px)]'>
      <Outlet/>
      </div>
      
      <div className="h-18 border-orange-400">
      <Footer/>
      </div>
    </>
  );
};

export default Main;