import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



export const Navbar = () => {

  const { productos } = useSelector(state=> state.item);




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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/productos">
                Productos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Nosotros
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" href="#">
                Contacto
              </NavLink>
            </li>
          </ul>
          <div className="botones">
            <a href="" className="btn btn-outline-primary">
                <i className="fa fa-sign-in me-1"></i>
                Inicio
            </a>
            <a href="" className="btn btn-outline-success ms-2">
                <i className="fa fa-user plus me-1"></i>
                Registro
            </a>
            <a href="" className="btn btn-outline-danger ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Carrito ({productos.length})
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
