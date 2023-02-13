import { useSelector } from "react-redux";
import "../App.css";

export const Cart = () => {
  const { productos } = useSelector((state) => state.item);
  console.log(productos);
  return (
    <>
      <h1>Hola</h1>
      <div className="container">
        {productos.map((element) => (
          <div key={element.id} className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={element.image}
                  className="img-fluid rounded-start img-thumbl p-5"
                  alt="..."
                  width="300px"
                />
              </div>
              <div className="col-md-8 d-flex">
                <div className="card-body">
                  <h5 className="card-title fw-bolder">{element.title}</h5>
                  <p>
                    {element.qty} X {element.price} = $ {element.qty * element.price}
                  </p>
                  <button className="btn btn-outline-dark me-2" >
                    <i className="fa fa-minus"></i>
                  </button>
                  <button className="btn btn-outline-dark">
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
