import { useState } from "react";
import axios from "axios";

function AddProduct() {

  const [name, setName] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const addProduct = async () => {

    try {

      const res =
        await axios.post(
          "http://localhost:5000/products",
          {
            name,
            price,
            image,
            category,
            description
          }
        );

      alert(
        res.data.message
      );

      setName("");
      setPrice("");
      setImage("");
      setCategory("");
      setDescription("");

    } catch (error) {

      console.log(error);

      alert(
        "Failed to Add Product"
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
          maxWidth: "800px",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          ➕ Add Product
        </h1>

        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        />

        <textarea
          rows="5"
          placeholder="Product Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "15px",
            marginBottom: "25px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        />

        {/* Preview */}

        {image && (

          <div
            style={{
              textAlign: "center",
              marginBottom: "25px"
            }}
          >

            <img
              src={image}
              alt="preview"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.15)"
              }}
            />

          </div>

        )}

        <button
          onClick={addProduct}
          style={{
            width: "100%",
            padding: "15px",
            background: "#2874f0",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold"
          }}
        >
          Add Product
        </button>

      </div>

    </div>

  );

}

export default AddProduct;