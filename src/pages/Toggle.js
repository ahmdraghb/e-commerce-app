const Toggle = ({ isInCart }) => {
  return (
    <>
      {isInCart ? (
        <i className="fa-solid fa-cart-shopping"></i>
      ) : (
        <i style={{ color: "grey" }} className="fa-solid fa-cart-shopping"></i>
      )}
    </>
  );
};

export default Toggle;
