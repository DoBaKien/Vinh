import "../styles/Nav.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import { useAuth } from "../stores/AuthContext"; // Import useAuth từ context

import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Nav = () => {
  const { isLoggedIn, searchInput, setSearchInput } = useAuth(); // Sử dụng useAuth để lấy trạng thái đăng nhập
  const history = useHistory();
  // xử lý tìm kiếm

  const search = () => {
    let searchValue = searchInput;

    console.log("value in nav", searchValue);
    history.push("/Shopping", { searchValue });
  };
  // const handleCheckOut = () => {
  //   const listCheckout = cart
  //     .filter((item) => selectedItems[item.id])
  //     .map((item) => item.id);

  //   history.push("/Checkout", { listCheckout });
  // };
  // =========
  const [user, setUser] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("data");
    setUser(JSON.parse(data));
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-blue sticky-top navbar-light  shadow-sm ">
        <div className="navbar-brand">
          <Link className="nav-link text-uppercase" to="/">
            <i className="fa-solid fa-shop me-5  "></i>
            <img className="logo" alt="" src={logo}></img>
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
          <div className="input-group">
            <span className="border-primary input-group-text bg-primary text-black">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" className="form-control border-primary" />
            <button className="btn btn-primary text-white">Tìm kiếm</button>
          </div>
        </div>
        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          {/* <div className="ms-auto d-none d-lg-block "> */}
          <div className=" d-none d-lg-block ">
            <div className="input-group searchContainer">
              <span className="border-primary input-group-text bg-primary text-black">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                value={searchInput}
                className="form-control border-primary"
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button
                className="btn btn-primary text-white"
                onClick={() => search()}
              >
                Tìm kiếm
              </button>
            </div>
          </div>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link
                to="/Shopping"
                className="nav-link-nav mx-3 text-uppercase"
                href="#"
              >
                <i class="fas fa-truck" style={{ marginRight: "5px" }}></i>
                <br />
                TRA CỨU
                <span style={{ marginLeft: "5px" }}></span> ĐƠN HÀNG
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link-nav mx-3 text-uppercase" to="/Cart">
                <i class="fas fa-shopping-basket me-1"></i>
                <br />
                Giỏ hàng
              </Link>
            </li>

            {isLoggedIn ? (
              // Đã đăng nhập, hiển thị "Cá nhân"
              <li className="nav-item">
                <Link className="nav-link-nav mx-3 text-uppercase" to="/User">
                  <i className="fas fa-user-alt"></i>
                  <br /> Cá nhân
                </Link>
              </li>
            ) : user ? (
              // Chưa đăng nhập, nhưng user tồn tại, hiển thị "Cá nhân"
              <li className="nav-item">
                <Link className="nav-link-nav mx-3 text-uppercase" to="/User">
                  <i className="fas fa-user-alt"></i> <br />
                  Cá nhân
                </Link>
              </li>
            ) : (
              // Chưa đăng nhập và user không tồn tại, hiển thị "Đăng nhập"
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link-nav mx-3 text-uppercase"
                    to="/Register"
                  >
                    <br />
                    Đăng kí
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link-nav mx-3 text-uppercase"
                    to="/login"
                  >
                    <i class="fa-solid fa-circle-user"></i> <br />
                    Đăng nhập
                  </Link>
                </li>
              </>
            )}
          </ul>

          <ul className="navbar-nav ms-auto "></ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
