import { useEffect, useState } from "react";
import { getAllFavorite, removeFavorite } from "../utils";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [isCart, setIsCart] = useState(true);
    const [totalExpenditure, setTotalExpenditure] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Function to calculate total expenditure
    const calculateTotalExpenditure = (items) => {
        const total = items.reduce((sum, item) => sum + item.price, 0);
        setTotalExpenditure(total);
    };
    // Track if we're showing Cart or Wishlist
    // Sort favorites by price in descending order
    const handleSort = (sortBy) => {
        if (sortBy === 'price') {
            const sortedFavorites = [...favorites].sort((a, b) => b.price - a.price);
            setFavorites(sortedFavorites);
        }
    };
        
    useEffect(() => {
        // Get all favorites from local storage when component mounts
        const storedFavorites = getAllFavorite();
        setFavorites(storedFavorites);
        const storedItems = JSON.parse(localStorage.getItem(isCart ? "cartItems" : "wishlistItems")) || [];
        setFavorites(storedItems);
        calculateTotalExpenditure(storedItems);
    }, [isCart]);
    const handleToggle = () => {
        setIsCart(prev => !prev);
    };
    // Remove an item from favorites
    const handleRemove = (product_id) => {
        const storedItems = JSON.parse(localStorage.getItem(isCart ? "cartItems" : "wishlistItems")) || [];
        const updatedItems = storedItems.filter(item => item.product_id !== product_id);
        removeFavorite(product_id);
        const updatedFavorites = getAllFavorite();
        localStorage.setItem(isCart ? "cartItems" : "wishlistItems", JSON.stringify(updatedItems));
        setFavorites(updatedItems);
        calculateTotalExpenditure(updatedItems);
    };
    // Open the purchase modal
    const handlePurchase = () => {
        setIsModalOpen(true);
    };
    // Confirm purchase and clear cart
    const confirmPurchase = () => {
        setIsModalOpen(false);
        localStorage.removeItem("cartItems");
        setFavorites([]);
        setTotalExpenditure(0);
        navigate("/");
    };
    return (
        
        <div className="py-3">
         <Helmet>
                <title>Dashboard - Gadget-Heaven</title>
            </Helmet>
            <h1 className="text-3xl font-bold">Cart</h1>
            <div className="flex gap-4 justify-center">
                <button 
                    onClick={() => handleSort('price')}
                    className="btn btn-warning"
                > 
                    Sort by Price 
                </button>
                <button
                onClick={handlePurchase}
                 className="btn btn-primary" disabled={totalExpenditure === 0}>Purchase</button>
                <button onClick={handleToggle} className="btn btn-secondary">
                    {isCart ? "Show Wishlist" : "Show Cart"}
                </button>
                <h1 className="text-3xl font-bold">Total expenditure: ${totalExpenditure} </h1>
            </div>
            <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
                {favorites.length > 0 ? (
                    favorites.map(favorite => (
                        <Card key={favorite.product_id} gadgets={favorite} handleRemove={handleRemove} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500">
                        No items in cart
                    </div>
                )}
            </div>
            {isModalOpen && (
    <div
        style={{
            position: "fixed",
            inset: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
    >
        <div
            style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
                textAlign: "center",
            }}
        >
            <h2 className="text-2xl font-bold mb-4">Purchase Summary</h2>
            <p className="mb-4">Total Expenditure: ${totalExpenditure}</p>
            <button onClick={confirmPurchase} className="btn btn-primary mb-2">
                Confirm Purchase
            </button>
            
            <button onClick={() => setIsModalOpen(false)} className="btn btn-secondary">
                Cancel
            </button>
           
        </div>
    </div>
)}
        </div>
    );
};

export default Dashboard;


// import { useEffect, useState } from "react";
// import Card from "../components/Card";

// const Dashboard = () => {
//     const [favorites, setFavorites] = useState([]);
//     const [isCart, setIsCart] = useState(true); // Track if we're showing Cart or Wishlist

//     useEffect(() => {
//         // Load items based on the current toggle (Cart or Wishlist)
//         const storedItems = JSON.parse(localStorage.getItem(isCart ? "cartItems" : "wishlistItems")) || [];
//         setFavorites(storedItems);
//     }, [isCart]);

//     const handleToggle = () => {
//         setIsCart(prev => !prev);
//     };

//     const handleRemove = (product_id) => {
//         const storedItems = JSON.parse(localStorage.getItem(isCart ? "cartItems" : "wishlistItems")) || [];
//         const updatedItems = storedItems.filter(item => item.product_id !== product_id);
//         localStorage.setItem(isCart ? "cartItems" : "wishlistItems", JSON.stringify(updatedItems));
//         setFavorites(updatedItems);
//     };

//     return (
//         <div className="py-3">
//             <h1 className="text-3xl font-bold">{isCart ? "Cart" : "Wishlist"}</h1>
//             <div className="flex gap-4 justify-center">
//                 <button onClick={handleToggle} className="btn btn-secondary">
//                     {isCart ? "Show Wishlist" : "Show Cart"}
//                 </button>
//             </div>
//             <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
//                 {favorites.length > 0 ? (
//                     favorites.map(favorite => (
//                         <Card key={favorite.product_id} gadgets={favorite} handleRemove={handleRemove} />
//                     ))
//                 ) : (
//                     <div className="col-span-full text-center text-gray-500">
//                         No items in {isCart ? "cart" : "wishlist"}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Dashboard;


// import { useEffect, useState } from "react";
// import { getAllFavorite, removeFavorite } from "../utils";
// import Card from "../components/Card";

// const Dashboard = () => {
//     const [favorites, setFavorites] = useState([]);

//     // Sort favorites by price in descending order
//     const handleSort = (sortBy) => {
//         if (sortBy === 'price') {
//             const sortedFavorites = [...favorites].sort((a, b) => b.price - a.price);
//             setFavorites(sortedFavorites);
//         }
//     };
        
//     useEffect(() => {
//         // Get all favorites from local storage when component mounts
//         const storedFavorites = getAllFavorite();
//         setFavorites(storedFavorites);
//     }, []);
   
//     // Remove an item from favorites
//     const handleRemove = (product_id) => {
//         removeFavorite(product_id);
//         const updatedFavorites = getAllFavorite();
//         setFavorites(updatedFavorites);
//     };

//     return (
//         <div className="py-3">
//             <h1 className="text-3xl font-bold">Cart</h1>
//             <div className="flex gap-4 justify-center">
//                 <button 
//                     onClick={() => handleSort('price')}
//                     className="btn btn-warning"
//                 > 
//                     Sort by Price 
//                 </button>
//                 <button className="btn btn-primary">Purchase</button>
//             </div>
//             <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
//                 {favorites.length > 0 ? (
//                     favorites.map(favorite => (
//                         <Card key={favorite.product_id} gadgets={favorite} handleRemove={handleRemove} />
//                     ))
//                 ) : (
//                     <div className="col-span-full text-center text-gray-500">
//                         No items in cart
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Dashboard;