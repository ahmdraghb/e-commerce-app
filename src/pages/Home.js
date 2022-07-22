// import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleGoToFool = () => {
    navigate("/product/fool/77", { replace: true });
  };
  return (
    <>
      <h1> Hello Broo ... </h1>
      <div onClick={handleGoToFool} className="btn btn-primary">
        Go To Fool{" "}
      </div>
    </>
  );
};

export default Home;
