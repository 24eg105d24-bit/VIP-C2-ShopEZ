import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function AdminProducts() {

  const [products, setProducts] =
    useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = () => {

    axios
      .get("http://localhost:5000/products")
      .then((res) => {

        setProducts(
          res.data
        );

      })
      .catch((err) => {

        console.log(err);

      });

  };

  const deleteProduct = async (
    id
  ) => {

    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmDelete)
      return;

    try {

      await axios.delete(
        `http://localhost:5000/products/${id}`
      );

      alert(
        "Product Deleted"
      );

      fetchProducts();

    } catch (error) {

      console.log(error);

      alert(
        "Delete Failed"
      );

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
          📦 Product Management
        </h1>

        <Link
          to="/admin/add-product"
          style={{
            textDecoration: "none"
          }}
        >
          <button
            style={{
              background:
                "#2874f0",
              color: "white",
              border: "none",
              padding:
                "12px 20px",
              borderRadius:
                "10px",
              cursor: "pointer",
              fontWeight:
                "bold"
            }}
          >
            ➕ Add Product
          </button>
        </Link>

      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px"
        }}
      >

        {products.map(
          (product) => (

            <div
              key={
                product._id
              }
              style={{
                background:
                  "white",
                borderRadius:
                  "18px",
                overflow:
                  "hidden",
                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.1)"
              }}
            >

              <img
                src={
                  product.image
                }
                alt={
                  product.name
                }
                style={{
                  width: "100%",
                  height:
                    "220px",
                  objectFit:
                    "cover"
                }}
              />

              <div
                style={{
                  padding:
                    "20px"
                }}
              >

                <h3>
                  {
                    product.name
                  }
                </h3>

                <h2
                  style={{
                    color:
                      "#388e3c"
                  }}
                >
                  ₹
                  {
                    product.price
                  }
                </h2>

                <p
                  style={{
                    color:
                      "#666"
                  }}
                >
                  {
                    product.category
                  }
                </p>

                <div
                  style={{
                    display:
                      "flex",
                    gap: "10px",
                    marginTop:
                      "15px"
                  }}
                >

                  <Link
                    to={`/admin/edit-product/${product._id}`}
                    style={{
                      flex: 1
                    }}
                  >
                    <button
                      style={{
                        width:
                          "100%",
                        background:
                          "#ff9800",
                        color:
                          "white",
                        border:
                          "none",
                        padding:
                          "10px",
                        borderRadius:
                          "8px",
                        cursor:
                          "pointer"
                      }}
                    >
                      ✏️ Edit
                    </button>
                  </Link>

                  <button
                    onClick={() =>
                      deleteProduct(
                        product._id
                      )
                    }
                    style={{
                      flex: 1,
                      background:
                        "#f44336",
                      color:
                        "white",
                      border:
                        "none",
                      padding:
                        "10px",
                      borderRadius:
                        "8px",
                      cursor:
                        "pointer"
                    }}
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );

}

export default AdminProducts;