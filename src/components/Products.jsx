import React, { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Oval } from "react-loader-spinner";
import { NavLink } from "react-router-dom";


export const Products = () => {
  const [spinner, setSpinner] = useState(true);
  const { getProducts, products,filter,setFilter } = useProducts();

  const filterProducts=(cat)=>{
    const updatedList = products.filter((x)=>x.category === cat);
    setFilter(updatedList);
  };


  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 400);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <h2 className="d-flex justify-content-center mt-5 fw-bold">Ultimos productos</h2>
        <hr />
      </div>
      <div className="botones d-flex justify-content-center mt-5">
        <button className="btn2" onClick={()=>setFilter(products)}>All</button>
        <button className="btn2" onClick={()=>filterProducts("men's clothing")}>Hombre</button>
        <button className="btn2" onClick={()=>filterProducts("women's clothing")}>Mujer</button>
        <button className="btn2" onClick={()=>filterProducts("jewelery")}>Joyas</button>
        <button className="btn2" onClick={()=>filterProducts("electronics")}>Electronic</button>
      </div>
      {spinner ? (
        <div className="d-flex justify-content-center mt-5">
          <Oval
            height={95}
            width={95}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <div className="grilla mt-5 container">
          {
            filter.map((pro) => (
              <div key={pro.id} className="card__a text-center p-4 mb-4">
                <img
                  src={pro.image}
                  className="card-img-top"
                  alt="..."
                  height="250px"
                />
                <div className="card-body mt-3">
                  <h5 className="text-title__a">{pro.title.substring(0, 12)}</h5>
                  <p className="card-text fw-bolder">${pro.price}</p>
                  <NavLink to={`/producto/${pro.id}`} className="card-button__a fw-bold">
                    Ver
                  </NavLink>
                </div>
              </div>
            ))
          };
        </div>
      )}
    </>
  );
};
