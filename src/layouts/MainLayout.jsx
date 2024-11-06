import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import bannerImg from '../assets/banner.jpg';
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";
const MainLayout = () => {
    const { product_id } = useParams();

    const location = useLocation();
    return (
     
       <div>
        
        <Toaster></Toaster>
            {/*Navbar */}
            <div>
                <Helmet></Helmet>
                <Navbar></Navbar>
                
                
                {location.pathname === '/' && (
                    <Banner 
                        title="Upgrade Your Tech Accessorize with Gadget Heaven Accessories"
                        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                        cartBtn="Shop Now"
                        
                        img={bannerImg}
                    />
                )}
                {location.pathname ===`/gadgets/${product_id}`  && (
                    <Banner 
                        title="Product Details"
                        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                        
                    />
                )}
                {location.pathname === '/dashboard' && (
                    <Banner 
                        title="Dashboard"
                        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                        
                        
                        
                    />
                )}
                {location.pathname === '/statistics' && (
                    <Banner 
                        title="Statistics"
                        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
                                              
                        
                    />
                )}
               
                </div>

            <div className="min-h-[calc(100vh-292px)]"> 
            {/* Dynamic Section */}
            <Outlet></Outlet>

            </div>
            
            {/* Footer */}
            <div className="text-3xl text-center mb-3">
            <Header title={'Explore the Cutting Edge Technology'} subtitle ={'Leading the way in cutting-edge technology and innovation.'}></Header>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;