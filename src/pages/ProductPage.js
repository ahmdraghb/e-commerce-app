import { useLocation, useParams } from "react-router-dom";

const ProductPage = () => {
  const location = useLocation();
  console.log(location);
  const params = useParams();
  console.log(params);
  return <h1>Product No : {params.id}</h1>;
};

export default ProductPage;
