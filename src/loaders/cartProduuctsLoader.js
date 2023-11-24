// Normal Fetch ================start======================================
// const cartProductsLoader = () =>{
//      fetch('products.json')
//     .then(res => res.json())
//     .then(data =>console.log(data))
// }
// export default cartProductsLoader
// Normal Fetch ================End======================================

import { getShoppingCart } from "../utilities/fakedb";


 const cartProductsLoader = async () =>{
      const loadedProducts = await fetch('products.json')
      const products = await loadedProducts.json();
      
      const storedCart = getShoppingCart();
     const savedCart = [];
      

       for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity=quantity;
            savedCart.push(addedProduct)
        }
       }

       return savedCart;
  }

export default cartProductsLoader;












