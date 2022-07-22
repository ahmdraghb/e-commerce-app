const Product = (props) => {
  const { name, number, price } = props.product;

  return (
    <div className="parent p-3 row">
      <span className=" p-3 m-2 badge bg-info  col-3">{name}</span>
      <span
        className="p-3 m-2 badge  col-2"
        style={{ color: "black", fontSize: "16px" }}
      >
        {price} $
      </span>
      <div
        className="button btn bg-info m-2 col-1 "
        onClick={() => props.decremnt(name)}
      >
        -
      </div>
      <span
        className=" badge m-2 p-3 col-1 "
        style={{ color: "black", fontSize: "16px" }}
      >
        {number}
      </span>
      <div
        className="button btn bg-info m-2 col-1 "
        onClick={() => props.increment(name)}
      >
        +
      </div>
      <div className="  btn btn m-2  col-2 " onClick={() => props.del(name)}>
        <i className="icon fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default Product;
