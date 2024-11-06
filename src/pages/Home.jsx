import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Categories from "../components/Categories";
import Header from "../components/Header";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
const Home = () => {
  const data = useLoaderData();
 console.log(data.categories)
  return (
      <div>
  <Helmet>
        <title>Gadget-Heaven</title>
      
        </Helmet>
        <div className=""> 
          
          </div>
          <div className="py-4 text-center text-3xl"> <Header title={'Explore Cutting Edge Technology'}></Header> </div>
          {/* card container */}
          <div className="grid grid-cols-12 gap-5 space-x-5 mb-5">
            {/* category container */}
            <div className="grid-cols-1 ">
            <Categories categories ={data}></Categories>
            </div>
            {/* card container */}
            <div className="col-start-2 col-span-11">
              <Outlet></Outlet>
              </div>
          </div>
   
       
      </div>


     
     
       
          
        
      
    );
};

export default Home;