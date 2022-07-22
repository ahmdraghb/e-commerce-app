import { Link } from "react-router-dom";
const Admin = ({ products }) => {
  return (
    <>
      <Link to="/product/add">
        <div className="btn btn-primary mt-3 float-end px-3 ">add</div>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Admin;
