import { useState } from "react";
// import { Link } from "react-router-dom";
import Toggle from "./Toggle";

const Menu = ({ products, cateogries, handleAddToCart }) => {
  // filter
  const [currentCateogry, setCurrentCateogry] = useState(1);
  //get filter items
  const filterItems =
    currentCateogry === 0
      ? products
      : products.filter((p) => p.cateogry === currentCateogry);
  //get Pagination
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const startIndexPage = (currentPage - 1) * itemsPerPage;

  // get items in the Page
  const paginatedItems = filterItems.slice(
    startIndexPage,
    startIndexPage + itemsPerPage
  );
  // get no of pges
  const noOfPage = Math.ceil(filterItems.length / itemsPerPage);

  // get array of pages
  let pagesArr = [];
  for (let i = 1; i <= noOfPage; i++) {
    pagesArr.push(i);
  }

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  // change cat
  const handleChangeCat = (cateogryId) => {
    setCurrentCateogry(cateogryId);
    setCurrentPage(1);
  };

  //   Search
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredSearch = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const [sort, setSorts] = useState("");
  const handleSort = (e) => {
    setSorts(e.target.value);
  };

  const sortedByName = paginatedItems.sort((a, b) => {
    if (sort === "ASC") {
      return a.name > b.name ? 1 : -1;
    } else {
      return a.name > b.name ? -1 : 1;
    }
  });

  return (
    <>
      <div className="row">
        <div className="col-3 mt-4  ">
          <ul className="list-group  ">
            {cateogries.map((cat) => (
              <li
                key={cat.id}
                className={
                  cat.id === currentCateogry
                    ? "list-group-item active "
                    : "list-group-item "
                }
                onClick={() => handleChangeCat(cat.id)}
                style={{ cursor: "pointer" }}
              >
                {cat.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-9">
          <form className="d-flex m-2 ">
            <button
              value="ASC"
              onClick={(e) => handleSort(e)}
              type="button"
              class="btn btn-primary"
            >
              <i class="fa-solid fa-arrow-up-wide-short"></i>{" "}
            </button>
            <span style={{ color: "transparent" }}>M</span>
            <button
              value="DSC"
              onClick={(e) => handleSort(e)}
              type="button"
              class="btn btn-primary"
            >
              <i class="fa-solid fa-arrow-down-wide-short"></i>{" "}
            </button>
            <span style={{ color: "transparent" }}>M</span>
            <input
              onChange={(e) => handleSearch(e)}
              className="form-control me-2"
              type="search"
              placeholder="Search Here"
              aria-label="Search"
            />
            {/* <button  className="btn btn-outline-success" type="submit">Search</button> */}
          </form>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {paginatedItems.map((z) => (
                <tr key={z.id}>
                  <td>{z.name}</td>
                  <td>{z.price}</td>
                  <td
                    onClick={() => handleAddToCart(z.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <Toggle isInCart={z.isInCart} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              {pagesArr.map((page) => (
                <li
                  key={page}
                  className={
                    page === currentPage ? "page-item active" : "page-item "
                  }
                  aria-current="page"
                  onClick={() => handlePage(page)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="page-link">{page}</span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Menu;
