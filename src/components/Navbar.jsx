import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const { productos } = useSelector((state) => state.item);
  
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container">
        <a className="navbar-brand fw-bold fs-4" href="#">
          Tienda Virtual ML
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            <li className="nav-item">
              <NavLink className=" btn2 me-4" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" btn2 me-4" to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" btn2 me-4" href="#">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" btn2" href="#">
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="botones d-flex justify-content-center">
            <a href="" className="btn2 me-3">
              <i className="fa fa-sign-in me-1 text-primary"></i>
              Inicio
            </a>
            <a href="" className="btn2 me-3">
              <i className="fa fa-user plus me-1 text-success"></i>
              Registro
            </a>
            <NavLink to="/cart" className="btn2 ">
              <i className="fa fa-shopping-cart me-1 text-danger"></i>
              Carrito ({productos.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
