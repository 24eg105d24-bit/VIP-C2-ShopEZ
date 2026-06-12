import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar() {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const [cartCount, setCartCount] =
    useState(0);

  const logout = () => {

    localStorage.clear();

    window.location.href = "/";

  };

  useEffect(() => {

    axios
      .get("http://localhost:5000/cart")
      .then((res) => {

        setCartCount(
          res.data.length
        );

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (

    <nav
      style={{
        background: "#131921",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.2)"
      }}
    >

      {/* Logo */}

      <Link
        to="/"
        style={{
          textDecoration: "none"
        }}
      >
        <h1
          style={{
            margin: 0,
            color: "#ff9900",
            fontSize: "32px",
            fontWeight: "bold"
          }}
        >
          ShopEZ
        </h1>
      </Link>

      {/* Search UI */}


      {/* Navigation */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "25px"
        }}
      >

        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500"
          }}
        >
          Home
        </Link>

        <Link
          to="/orders"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500"
          }}
        >
          Orders
        </Link>

        <Link
          to="/profile"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500"
          }}
        >
          Profile
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "500"
          }}
        >
          🛒 Cart
          {" "}
          <span
            style={{
              background: "#ff9900",
              padding: "4px 8px",
              borderRadius: "50%",
              color: "black",
              fontWeight: "bold"
            }}
          >
            {cartCount}
          </span>
        </Link>

        {role === "admin" && (

          <Link
            to="/admin"
            style={{
              color: "#ff9900",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Admin
          </Link>

        )}

        {!token ? (

          <>

            <Link
              to="/login"
              style={{
                color: "white",
                textDecoration: "none",
                fontWeight: "500"
              }}
            >
              Login
            </Link>

            <Link
              to="/register"
              style={{
                background: "#ff9900",
                color: "black",
                textDecoration: "none",
                padding: "10px 15px",
                borderRadius: "8px",
                fontWeight: "bold"
              }}
            >
              Register
            </Link>

          </>

        ) : (

          <button
            onClick={logout}
            style={{
              background: "#ff9900",
              color: "black",
              border: "none",
              padding: "10px 15px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Logout
          </button>

        )}

      </div>

    </nav>

  );

}

export default Navbar;