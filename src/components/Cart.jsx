import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { add, deleting, disminuir } from "../store/itemSlice";

export const Cart = () => {
  const dispatch = useDispatch();
  const { productos } = useSelector((state) => state.item);

    const increase=(producto)=>{
      dispatch(add(producto))
    }
    const decrease=(producto)=>{
      dispatch(disminuir(producto))
    }

  const del=(producto)=>{
    dispatch(deleting(producto))
  }

  return (
    <>
      <div className="container my-5">
        {productos.map((element) => (
          <div key={element.id} className="card mb-3 cart-item">
            <div className="row g-0 aa">
              <div className="col-md-4">
                <img
                  src={element.image}
                  className="img-fluid rounded-start p-1"
                  alt="..."
                  width="200px"
                />
              </div>
              <div className="col-md-8 m-auto">
                <div className="card-body d-flex justify-content-around">
                  <h5 className="card-title fw-bolder">{element.title}</h5>
                  <p>
                    {element.qty} X {element.price} = $ {element.qty * element.price}
                  </p>
                  <div className="botones">
                    <button className="btn btn-outline-dark me-2" onClick={()=>decrease(element)} >
                      <i className="fa fa-minus"></i>
                    </button>
                    <button className="btn btn-outline-dark mas me-2" onClick={()=>increase(element)}>
                      <i className="fa fa-plus"></i>
                    </button>
                    <button className="btn btn-danger" onClick={()=>del(element)}>
                      <i className="fa fa-trash"></i>
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
