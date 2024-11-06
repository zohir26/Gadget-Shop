import { Link } from "react-router-dom";
import Home from "../pages/Home";
import { NavLink } from "react-router-dom";
const Categories = ({categories}) => {
 console.log(categories)
    return (
    <div role = '' className="tabs tabs-lifted">
        <Link><button className="btn btn-primary w-20 mt-5">All Products</button></Link>
        {
            categories.map(category =>(
                <NavLink 
                key={category.category_id}
                to={`/cards/${category.category_name}`}
                role="tab"
                className={({isActive})=> `tab bg-violet-400 ${isActive?'tab-active':''}`}
                >
               {category.category_name}
                </NavLink> 
           ))

        }
    </div>
   
    );
};

export default Categories;

