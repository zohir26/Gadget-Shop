import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
const Card = ({gadgets,handleRemove}) => {
   
  const {product_title,product_image,price,description,specifications,rating,product_id} = gadgets || {};
  const {pathname} = useLocation();
    return (
        <div>
          <div className="card bg-base-400 w-96 shadow-xl mb-3">
        <figure className="h-56 ">
          <img
            src={product_image}
            alt="Shoes"
            className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          
          <p>Description:{description}</p>
          <p>Price:{price}</p>
          <p>Rating:{rating}</p>
          <div className="card-actions">
           <Link to={`/gadgets/${product_id}`}>
           <button className="btn btn-primary">View Details</button>
           </Link>
           {
            pathname === '/dashboard' && 
            (
              <button
              onClick={
                ()=> handleRemove(product_id)
              }
              className="absolute -top-5 -right-1 text-2xl text-red-500 rounded-full"><FaTrash /></button>
            )
           }
          </div>
        </div>
      </div>
        </div>
    );
};

export default Card;


// import { FaTrash } from "react-icons/fa";

// const Card = ({ gadgets, handleRemove }) => {
//     const { product_title, product_image, price, description, rating, product_id } = gadgets || {};

//     return (
//         <div>
//             <div className="card bg-base-400 w-96 shadow-xl mb-3">
//                 <figure className="h-56 ">
//                     <img src={product_image} alt="Gadget" className="rounded-xl" />
//                 </figure>
//                 <div className="card-body items-center text-center">
//                     <h2 className="card-title">{product_title}</h2>
//                     <p>Description: {description}</p>
//                     <p>Price: {price}</p>
//                     <p>Rating: {rating}</p>
//                     <div className="card-actions">
//                         <button
//                             onClick={() => handleRemove(product_id)}
//                             className="text-2xl text-red-500 rounded-full"
//                         >
//                            Show Details
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;
