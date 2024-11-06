import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const GadgetsDetails = () => {
    const {product_id}=useParams();
    const data = useLoaderData();
    
    const [gadget, setGadget]=useState({});
    const [inCart, setInCart] = useState(false);
    const [inWishlist, setInWishlist] = useState(false);

    // declaring state if a card has been added to localstorage the button will be disabled.

    useEffect(()=>{
        const singleData= data.find(gadget => gadget.product_id== product_id)
          setGadget(singleData);
          // Check if the item is in Cart or Wishlist
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
        setInCart(cartItems.some(item => item.product_id === singleData.product_id));
        setInWishlist(wishlistItems.some(item => item.product_id === singleData.product_id));
          // const favorites = getAllFavorite();
          // const isExist = favorites.find(item=> item.product_id == gadget.product_id)
    },[data,product_id])
    
    const addToCart = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      if (!inCart) {
          cartItems.push(gadget);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          setInCart(true);
      }
  };

  const addToWishlist = () => {
    const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    if (!inWishlist) {
        wishlistItems.push(gadget);
        localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
        setInWishlist(true);
    }
};
    const {product_title,product_image,price,description,specifications,rating,availability}=gadget;
  // handlefavorite function
  const handleFavorite = (gadget) =>{
    addFavorite (gadget)
  }
  
    return (
        
<div className="card card-side bg-base-100 shadow-xl ">
        <Helmet>
        <title>Gadget Details - Gadget-Heaven</title>
      </Helmet>
  <figure className="w-60">
    <img className="w-full"
      src={product_image}
       />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price: {price}</p>
    <p>{description}</p>
    <p><b>Specification:</b>{specifications}</p>
    <div className="flex gap-2">
      <div>
      <p><b>Rating:</b> </p>  
      </div>
    {/* rating */}
    <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
    {rating}     
    </div>
    <p><b>Availability:</b>
    {
        availability === true? 'In stock': 'Out of Stock'
    }
    </p>
    <div className="flex w-full gap-4">
    <Link
    
    onClick={addToCart} 
                className={`btn ${inCart ? 'btn-disabled' : 'btn-primary'}`}>
                {inCart ? "Added to Cart" : <MdOutlineShoppingCart />}
    </Link>
    <Link 
    onClick={addToWishlist} 
    className={`btn ${inWishlist ? 'btn-disabled' : 'btn-secondary'}`}>
    {inWishlist ? "Added to Wishlist" : <CiHeart />}
     
    </Link>
    </div>
  </div>
</div>
    );
};

export default GadgetsDetails;




// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";

// const GadgetsDetails = () => {
//     const { product_id } = useParams();
//     const data = useLoaderData();
//     const [gadget, setGadget] = useState({});
//     const [inCart, setInCart] = useState(false);
//     const [inWishlist, setInWishlist] = useState(false);

//     useEffect(() => {
//         const singleData = data.find(gadget => gadget.product_id == product_id);
//         setGadget(singleData);

//         // Check if the item is in Cart or Wishlist
//         const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
        
//         setInCart(cartItems.some(item => item.product_id === singleData.product_id));
//         setInWishlist(wishlistItems.some(item => item.product_id === singleData.product_id));
//     }, [data, product_id]);

//     const addToCart = () => {
//         const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//         if (!inCart) {
//             cartItems.push(gadget);
//             localStorage.setItem("cartItems", JSON.stringify(cartItems));
//             setInCart(true);
//         }
//     };

//     const addToWishlist = () => {
//         const wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
//         if (!inWishlist) {
//             wishlistItems.push(gadget);
//             localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
//             setInWishlist(true);
//         }
//     };

//     return (
//         <div>
//             <h1>{gadget.product_title}</h1>
//             <p>{gadget.description}</p>
//             <button 
//                 onClick={addToCart} 
//                 className={`btn ${inCart ? 'btn-disabled' : 'btn-primary'}`}>
//                 {inCart ? "Added to Cart" : <MdOutlineShoppingCart />}
//             </button>
//             <button 
//                 onClick={addToWishlist} 
//                 className={`btn ${inWishlist ? 'btn-disabled' : 'btn-secondary'}`}>
//                 {inWishlist ? "Added to Wishlist" : <CiHeart />}
//             </button>
//         </div>
//     );
// };

// export default GadgetsDetails;

// import { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import { MdOutlineShoppingCart } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { addFavorite, getAllFavorite } from "../utils";
// import ReactStars from "react-rating-stars-component";
// const GadgetsDetails = () => {
//     const {product_id}=useParams();
//     const data = useLoaderData();
//     const [gadget, setGadget]=useState({});
//     // declaring state if a card has been added to localstorage the button will be disabled.

//     useEffect(()=>{
//         const singleData= data.find(gadget => gadget.product_id== product_id)
//           setGadget(singleData);
//           // const favorites = getAllFavorite();
//           // const isExist = favorites.find(item=> item.product_id == gadget.product_id)
//     },[data,product_id])
//     const {product_title,product_image,price,description,specifications,rating,availability}=gadget;
//   // handlefavorite function
//   const handleFavorite = (gadget) =>{
//     addFavorite (gadget)
//   }
  
//     return (
        
// <div className="card card-side bg-base-100 shadow-xl ">
//   <figure className="w-60">
//     <img className="w-full"
//       src={product_image}
//        />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{product_title}</h2>
//     <p>Price: {price}</p>
//     <p>{description}</p>
//     <p><b>Specification:</b>{specifications}</p>
//     <div className="flex gap-2">
//       <div>
//       <p><b>Rating:</b> </p>  
//       </div>
//     {/* rating */}
//     <div className="rating">
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//   <input
//     type="radio"
//     name="rating-2"
//     className="mask mask-star-2 bg-orange-400"
//     defaultChecked />
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
//   <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
// </div>
//     {rating}     
//     </div>
//     <p><b>Availability:</b>
//     {
//         availability === true? 'In stock': 'Out of Stock'
//     }
//     </p>
//     <div className="flex w-full gap-4">
//     <Link
    
//     onClick={()=> handleFavorite (gadget)}
    
//     className="flex gap-3 justify-center items-center bg-violet-300 p-3 rounded-xl">
//      <MdOutlineShoppingCart />Add to Cart</Link>
//     <Link className="flex gap-3 justify-center items-center bg-red-300 p-3 rounded-xl">
//      <CiHeart /> Add to wishlist</Link>
//     </div>
//   </div>
// </div>
//     );
// };

// export default GadgetsDetails;