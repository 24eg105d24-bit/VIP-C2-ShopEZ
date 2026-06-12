import { useEffect, useState } from "react";
import axios from "axios";

function AdminOrders() {

  const [orders, setOrders] =
    useState([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders = () => {

    axios
      .get("http://localhost:5000/orders")
      .then((res) => {

        setOrders(
          res.data
        );

      })
      .catch((err) => {

        console.log(err);

      });

  };

  const updateStatus = async (
    id,
    status
  ) => {

    try {

      await axios.put(
        `http://localhost:5000/orders/${id}`,
        {
          status
        }
      );

      fetchOrders();

    } catch (error) {

      console.log(error);

      alert(
        "Failed to Update Status"
      );

    }

  };

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

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          marginBottom: "30px"
        }}
      >

        <h1>
          🚚 Order Management
        </h1>

        <div
          style={{
            background: "white",
            padding: "12px 20px",
            borderRadius: "10px",
            boxShadow:
              "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          Total Orders:
          {" "}
          <strong>
            {orders.length}
          </strong>
        </div>

      </div>

      {orders.length === 0 ? (

        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center"
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
              borderRadius: "18px",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.1)"
            }}
          >

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "15px"
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
                      "20px",
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
                Update Status
              </h4>

              <select
                value={
                  order.status
                }
                onChange={(e) =>
                  updateStatus(
                    order._id,
                    e.target.value
                  )
                }
                style={{
                  padding: "12px",
                  borderRadius:
                    "8px",
                  border:
                    "1px solid #ddd",
                  minWidth:
                    "200px"
                }}
              >

                <option>
                  Placed
                </option>

                <option>
                  Packed
                </option>

                <option>
                  Shipped
                </option>

                <option>
                  Delivered
                </option>

              </select>

            </div>

          </div>

        ))

      )}

    </div>

  );

}

export default AdminOrders;