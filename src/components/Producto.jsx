import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { add } from "../store/itemSlice";


export const Producto = () => {
  const { id } = useParams();
  const { getProductById, productoid } = useProducts();
  const p = productoid;
  const dispatch = useDispatch();

  const addProducto=(productos)=>{
    dispatch(add({...productos,qty:1})) 
  };

  useEffect(() => {
    getProductById(id); 
  }, []);

  return (
    <>
      <div className="d-flex container mt-5 justify-content-center py-5 cart">
        <div className="col-md-6 mt-5">
          <img src={p.image} alt={p.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6 info-cart">
          <h4 className="text-uppercase text-black-50">{p.category}</h4>
          <h1 className="display-5">{p.title}</h1>
          <p className="lead fw-bolder">
            Rating{p.rating && p.rating.rate} <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${p.price}</h3>
          <p className="lead">{p.description}</p>
          <button className="btn btn-dark me-2" onClick={ ()=>addProducto(p) }>Agregar al carrito</button>
          <NavLink to="/cart" className="btn btn-outline-danger">Ir al carrito</NavLink>
        </div>
      </div>
    </>
  );
};
