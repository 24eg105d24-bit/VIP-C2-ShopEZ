import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

  const [orders, setOrders] =
    useState([]);

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

  const getStatusColor = (
    status
  ) => {

    switch (status) {

      case "Delivered":
        return "#4caf50";

      case "Shipped":
        return "#2196f3";

      case "Packed":
        return "#9c27b0";

      default:
        return "#ff9800";

    }

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
        📦 My Orders
      </h1>

      {orders.length === 0 ? (

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          No Orders Found
        </div>

      ) : (

        orders.map((order) => (

          <div
            key={order._id}
            style={{
              background: "white",
              padding: "25px",
              marginBottom: "20px",
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
                alignItems: "center",
                flexWrap: "wrap"
              }}
            >

              <div>

                <h2>
                  ₹{order.totalAmount}
                </h2>

                <p>
                  Order ID:
                  {" "}
                  {order._id}
                </p>

                <p>
                  Date:
                  {" "}
                  {new Date(
                    order.orderDate
                  ).toLocaleString()}
                </p>

              </div>

              <div>

                <span
                  style={{
                    background:
                      getStatusColor(
                        order.status
                      ),
                    color: "white",
                    padding:
                      "10px 18px",
                    borderRadius:
                      "25px",
                    fontWeight:
                      "bold"
                  }}
                >
                  {order.status}
                </span>

              </div>

            </div>

            <hr
              style={{
                margin:
                  "20px 0"
              }}
            />

            <div>

              <h4>
                Order Progress
              </h4>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "10px",
                  flexWrap: "wrap"
                }}
              >

                <span>
                  📦 Placed
                </span>

                <span>
                  📋 Packed
                </span>

                <span>
                  🚚 Shipped
                </span>

                <span>
                  ✅ Delivered
                </span>

              </div>

            </div>

          </div>

        ))

      )}

    </div>

  );

}

export default Orders;