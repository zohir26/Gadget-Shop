import { useEffect } from "react";
import Card from "./Card";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";

const Cards = () => {
    const {gadgetCards}=useParams();
    
    const data = useLoaderData();
    
    const [gadgets,setGadget] = useState([]);
    useEffect(()=>{
      if(gadgetCards){
        const filterByCategory = [...data].filter(gadget =>gadget.category === gadgetCards );
      
        
        setGadget(filterByCategory);
      }else{
        setGadget(data)
      }
        

    },[data, gadgetCards])
    return (
      // optional chaining is done to show the no data available when no data is found      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-16">
      {gadgets.length > 0 ? (
          gadgets.map(gadget => (
              <Card key={gadget.product_id} gadgets={gadget} />
          ))
      ) : (
          <div className="col-span-full text-center text-gray-500">
              No data found
          </div>
      )}
  </div>
    );
};

export default Cards;