import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context";
import AuthModal from "./Authentication/AuthModal";
import { useNavigate } from "react-router-dom";
import Userprofile from "./Userprofile";
import UserSidebar from "./Authentication/UserSidebar";

const Navbar = () => {
  const { query, setQuery, user } = useGlobalContext();
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/recommender");
  };
  const redirect2 = () => {
    navigate("/news");
  };
  const redirect_calculator = () => {
    navigate("/sip-calculator");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong sticky-top">
        <div className="container-fluid">
          <NavLink style={{ color: "gold" }} className="navbar-brand" to="/">
            C ₹ Y P T O
          </NavLink>
          <form
            className="d-flex input-group w-auto"
            onSubmit={(e) => e.preventDefault()}
          >
           
            <div className="p-2 rounded">
              <button
                onClick={redirect_calculator}
                type="button"
                class="nav-button btn text-white"
              >
                Calculator
              </button>
            </div>
            <div className="p-2 rounded">
              <button
                onClick={redirect}
                type="button"
                class="nav-button btn text-white"
              >
                Recommender
              </button>
            </div>
            <div className="p-2 rounded">
              <button
                onClick={redirect2}
                type="button"
                class="nav-button btn text-white"
              >
                News
              </button>
            </div>

            <input
              type="search"
              className="form-control rounded  bg-dark text-white p-2"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <span
              className="input-group-text border-none bg-dark"
              id="search-addon"
            >
              <i className="fas fa-search text-white"></i>
            </span>
          </form>
          {/* model added */}
        </div>
      </nav>
      <div className="row">
        <div className="col-md-6">
          {user ? <UserSidebar /> : <AuthModal />}

        </div>
        <div className="col-md-6 align-content-end">
     
          {user ?  <NavLink style={{ color: "gold" }} className="navbar-brand" to="/userprofile">
          <div className="w-25 ms-auto p-2 rounded-3 text-center buttonnnn" >
            MyProfile
          </div>
          </NavLink>: ""}

        </div>
      </div>
    </>
  );
};

export default Navbar;