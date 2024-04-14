import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { FaArrowDown } from "react-icons/fa";
import Image from 'react-bootstrap/Image';
import image1 from '../../../images/profile.png'
import { Col } from "react-bootstrap";
const Home = () => {

    return (
        <>
            <div className="row box-shadow " style={{margin:'40px',}} >
                <div className="col-md-3" style={{ backgroundColor: '#1076e3' }}>
                    <h1 align='center'>PortFolio</h1>
                  
                  <Image src={image1} style={{width:'300px',height:'250px' , margin:'10px'}} rounded />  
                 
                     
                 
                </div>
                <div className="col-md-9 p-2" style={{backgroundColor:'white',}} >
                  <div className="" style={{display:"flex",justifyContent:'center'}}>
                  <Navbar/>
                  </div>
                    <Outlet/>
                </div>
                <div className="up-down-arrow box-shadow" >
                         <FaArrowDown size={40} />
                </div>
            </div>
        </>
    )
}
export default Home;