import { useState } from "react";


export const useProducts = () => {

    const [products, setProducts] = useState([])
    const [filter, setFilter] = useState(products);
    const [productoid, setProductoId] =useState({});
    
    const getProducts=async()=>{
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      setProducts(data);
      setFilter(data);
    };

    const getProductById=async(id)=>{
      const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await resp.json();
      setProductoId(data);  
    };

  return {
    // propiedades
    products,
    filter,
    setFilter,
    setProductoId,
    productoid,
    //metodos
    getProducts,
    getProductById

  }
}
