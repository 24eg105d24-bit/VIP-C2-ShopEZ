import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AdminDashboard() {

  const [products, setProducts] =
    useState(0);

  const [orders, setOrders] =
    useState(0);

  const [revenue, setRevenue] =
    useState(0);

  useEffect(() => {

    axios
      .get("http://localhost:5000/products")
      .then((res) => {

        setProducts(
          res.data.length
        );

      });

    axios
      .get("http://localhost:5000/orders")
      .then((res) => {

        setOrders(
          res.data.length
        );

        const totalRevenue =
          res.data.reduce(
            (sum, order) =>
              sum +
              order.totalAmount,
            0
          );

        setRevenue(
          totalRevenue
        );

      });

  }, []);

  const cardStyle = {
    background: "white",
    borderRadius: "15px",
    padding: "25px",
    boxShadow:
      "0 4px 15px rgba(0,0,0,0.1)",
    minWidth: "250px",
    flex: 1,
    textAlign: "center"
  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f1f3f6",
        padding: "40px"
      }}
    >

      <h1
        style={{
          marginBottom: "30px"
        }}
      >
        📊 Admin Dashboard
      </h1>

      {/* Statistics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
          marginBottom: "40px"
        }}
      >

        <div style={cardStyle}>
          <h3>📦 Products</h3>
          <h1>{products}</h1>
        </div>

        <div style={cardStyle}>
          <h3>🛒 Orders</h3>
          <h1>{orders}</h1>
        </div>

        <div style={cardStyle}>
          <h3>💰 Revenue</h3>
          <h1>
            ₹{revenue}
          </h1>
        </div>

        <div style={cardStyle}>
          <h3>⭐ Status</h3>
          <h1>
            Active
          </h1>
        </div>

      </div>

      {/* Quick Actions */}

      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        Quick Actions
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}
      >

        <Link
          to="/admin/products"
          style={{
            textDecoration: "none"
          }}
        >
          <div
            style={{
              background: "#2874f0",
              color: "white",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.15)"
            }}
          >
            <h2>
              📦 Manage Products
            </h2>

            <p>
              View, Edit and Delete
              Products
            </p>
          </div>
        </Link>

        <Link
          to="/admin/add-product"
          style={{
            textDecoration: "none"
          }}
        >
          <div
            style={{
              background: "#ff9800",
              color: "white",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.15)"
            }}
          >
            <h2>
              ➕ Add Product
            </h2>

            <p>
              Create New Product
            </p>
          </div>
        </Link>

        <Link
          to="/admin/orders"
          style={{
            textDecoration: "none"
          }}
        >
          <div
            style={{
              background: "#4caf50",
              color: "white",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.15)"
            }}
          >
            <h2>
              🚚 Manage Orders
            </h2>

            <p>
              Update Order Status
            </p>
          </div>
        </Link>

      </div>

      {/* Footer */}

      <div
        style={{
          marginTop: "50px",
          textAlign: "center",
          color: "#777"
        }}
      >
        <p>
          ShopEZ Admin Panel
        </p>
      </div>

    </div>

  );

}

export default AdminDashboard;