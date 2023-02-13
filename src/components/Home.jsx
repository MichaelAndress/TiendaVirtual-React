import React, { useEffect, useState } from "react";
import { Products } from "./Products";
import Hero from '../assets/bg.jpg'

export const Home = () => {



  return (
    <div className="hero">
      <div className="card card-hero">
        <img
          src={ Hero }
          className=""
          alt="..."
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center hero-text">
          <div className="container text-dark">
            <h5 className="card-title display-3 fw-bolder mb-0">
              Nuevos Accesorios
            </h5>
            <p className="card-text lead fs-2">
              Ve todas las novedades que tenemos para ti
            </p>
          </div>
        </div>
      </div>
        <Products />
    </div>
  );
};
