import { Link, NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "#dc3545" }}>
            NewsNest
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-link bg-red" : "nav-link"
                  }
                  // style={(e) => (e.isActive ? { color: "white" } : "")}
                  aria-current="page"
                  to="/general"
                >
                  General
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-link bg-red" : "nav-link"
                  }
                  aria-current="page"
                  to="/business"
                >
                  Business
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-link bg-red" : "nav-link"
                  }
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-link bg-red" : "nav-link"
                  }
                  aria-current="page"
                  to="/health"
                >
                  Health
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-link bg-red" : "nav-link"
                  }
                  aria-current="page"
                  to="/science"
                >
                  Science
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-link bg-red" : "nav-link"
                  }
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={(e) =>
                    e.isActive ? "nav-link bg-red" : "nav-link"
                  }
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </NavLink>
              </li>
            </ul>
            {/* <div className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
