import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {

  const [orders, setOrders] =
    useState([]);

  const userEmail =
    localStorage.getItem("email");

  const role =
    localStorage.getItem("role");

  useEffect(() => {

    axios
      .get("http://localhost:5000/orders")
      .then((res) => {

        setOrders(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#f1f3f6",
        padding: "40px"
      }}
    >

      {/* Profile Card */}

      <div
        style={{
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.1)",
          marginBottom: "30px"
        }}
      >

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "25px"
          }}
        >

          <div
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#2874f0",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "40px",
              fontWeight: "bold"
            }}
          >
            👤
          </div>

          <div>

            <h1>
              My Profile
            </h1>

            <p>
              {userEmail}
            </p>

            <span
              style={{
                background:
                  role === "admin"
                    ? "#4caf50"
                    : "#2874f0",
                color: "white",
                padding: "6px 12px",
                borderRadius: "20px"
              }}
            >
              {role}
            </span>

          </div>

        </div>

      </div>

      {/* Statistics */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
          marginBottom: "40px"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h3>
            🛒 Total Orders
          </h3>

          <h1>
            {orders.length}
          </h1>
        </div>

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <h3>
            📦 Account Status
          </h3>

          <h1>
            Active
          </h1>
        </div>

      </div>

      {/* Recent Orders */}

      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        Recent Orders
      </h2>

      {orders.length === 0 ? (

        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px"
          }}
        >
          No Orders Yet
        </div>

      ) : (

        orders.map((order) => (

          <div
            key={order._id}
            style={{
              background: "white",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "15px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.1)"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center"
              }}
            >

              <div>

                <h3>
                  ₹{order.totalAmount}
                </h3>

                <p>
                  Order ID:
                  {" "}
                  {order._id}
                </p>

              </div>

              <span
                style={{
                  background:
                    order.status ===
                    "Delivered"
                      ? "#4caf50"
                      : order.status ===
                        "Shipped"
                      ? "#2196f3"
                      : "#ff9800",
                  color: "white",
                  padding: "8px 15px",
                  borderRadius: "20px"
                }}
              >
                {order.status}
              </span>

            </div>

          </div>

        ))

      )}

    </div>

  );

}

export default Profile;