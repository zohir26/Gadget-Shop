import toast, { Toaster } from 'react-hot-toast';
// get all coffees from local storage

const getAllFavorite = ()=>{
    const all = localStorage.getItem('favorites')    
    if(all){
        const favorites = JSON.parse(all)
        return favorites;
    }else{
        return []
    }
}
// add a gadget to local storage
const addFavorite = (gadget) => {
  // get all the previous data
    const favorites = getAllFavorite();
   
   // avoid adding duplicate cards
    const isExist = favorites.find(item=> item.product_id === gadget.product_id)
    // condtional rendering with react toast
    if (isExist) return toast.error('Gadget had already added')
    favorites.push(gadget)
   localStorage.setItem('favorites',JSON.stringify(favorites) )
   return toast.success('Gadget successfully added to cart')
}
// Remove coffee from local storage
const removeFavorite = product_id => {
   // get all the previously found coffee
const favorites = getAllFavorite();
const remaining = favorites.filter (gadget => gadget.product_id !== product_id )
localStorage.setItem('favorites',JSON.stringify(remaining) )
   return toast.success('Gadget successfully removed from cart')
}
// 

export {addFavorite, getAllFavorite, removeFavorite};