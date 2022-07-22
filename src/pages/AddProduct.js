import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    const { data: newProduct } = await axios.post(
      "http://localhost:3000/products",
      product
    );
    navigate("/admin");
    console.log(newProduct);
  };
  return (
    <>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            value={product.name}
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setProduct({ ...product, name: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            value={product.price}
            type="text"
            className="form-control"
            id="price"
            onChange={(e) => {
              setProduct({ ...product, price: e.target.value });
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>{" "}
    </>
  );
};

export default AddProduct;
