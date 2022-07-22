import { useState } from "react";
import ToggleCartIcon from "../Components/ToggleCartIcon";

const Menu = ({ products, categories, hadleAddToCart }) => {
  //   --------- Filter ---------
  const [currentCategory, setCurrentCategory] = useState(1);

  // Get the filterd item
  const filteredItems =
    currentCategory === 0
      ? products
      : products.filter((p) => p.category === currentCategory);

  //   --------- Pagination ---------
  const itemsCountPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  //   Get the start index in the page
  const startIndexInPage = (currentPage - 1) * itemsCountPerPage;

  //   Get the items in the page
  const paginatdItems = filteredItems.slice(
    startIndexInPage,
    startIndexInPage + itemsCountPerPage
  );

  //   Get no of pages
  const noOfPages = Math.ceil(filteredItems.length / itemsCountPerPage);

  //   Get array of pages numbers
  let pagesArray = [];
  for (let i = 1; i <= noOfPages; i++) {
    pagesArray.push(i);
  }

  //   Change Page handler
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  //   change the current cutegory handler
  const handleChangeCategory = (categryId) => {
    setCurrentCategory(categryId);
    setCurrentPage(1);
  };

  //   Search .. When User Type saerch is active
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredSearch = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // SORT BY NAME
  const [sort, setSorts] = useState("");
  const handleSort = (e) => {
    setSorts(e.target.value);
  };

  const sortedByName = paginatdItems.sort((a, b) => {
    if (sort === "ASC") {
      return a.name > b.name ? 1 : -1;
    } else {
      return a.name > b.name ? -1 : 1;
    }
  });

  // sort ?  handelSortACS() {products.sort(a, b)
  //   a.name  > b.name ? 1 :-1 }
  // // console.log(handelSortACS);
  // function handelSortDSC() {products.sort(a, b)
  //   a.name  > b.name ? -1 :1 } ;
  // // console.log(handelSortDSC);

  return (
    <div className="row mt-3">
      <div className="col-2">
        <ul className="list-group">
          {categories.map((cat) => (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => handleChangeCategory(cat.id)}
              key={cat.id}
              className={
                cat.id === currentCategory
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-10">
        <form className="d-flex mx-2">
          <button
            value="ASC"
            onClick={(e) => handleSort(e)}
            type="button"
            class="btn btn-primary"
          >
            <i class="fa-solid fa-sort-up"></i>
          </button>
          <span style={{ color: "white" }}>M</span>
          <button
            value="DSC"
            onClick={(e) => handleSort(e)}
            type="button"
            class="btn btn-secondary"
          >
            <i class="fa-solid fa-sort-down"></i>
          </button>
          <span style={{ color: "white" }}>M</span>
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
              <th>Add OR Not</th>
            </tr>
          </thead>

          <tbody>
            {search.length
              ? filteredSearch.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.price} $</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => hadleAddToCart(p.id)}
                    >
                      <ToggleCartIcon isInCart={p.isInCart} />
                    </td>
                  </tr>
                ))
              : paginatdItems.map((p) => (
                  <tr key={p.id}>
                    <td>{p.name}</td>
                    <td>{p.price} $</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => hadleAddToCart(p.id)}
                    >
                      <ToggleCartIcon isInCart={p.isInCart} />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        {/* Pagination */}
        {pagesArray.length !== 1 && (
          <nav aria-label="...">
            <ul className="pagination pagination-sm">
              {pagesArray.map((page) => (
                <li
                  key={page}
                  style={{ cursor: "pointer" }}
                  className={
                    page === currentPage ? "page-item active" : "page-item"
                  }
                  aria-current="page"
                  onClick={() => handleChangePage(page)}
                >
                  <span className="page-link">{page}</span>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Menu;
