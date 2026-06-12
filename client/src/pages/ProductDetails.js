import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [reviews, setReviews] =
    useState([]);

  const [rating, setRating] =
    useState("");

  const [comment, setComment] =
    useState("");

  useEffect(() => {

    axios
      .get(
        `http://localhost:5000/products/${id}`
      )
      .then((res) => {

        setProduct(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

    axios
      .get(
        `http://localhost:5000/reviews/${id}`
      )
      .then((res) => {

        setReviews(res.data);

      });

  }, [id]);

  const addToCart = async () => {

    try {

      await axios.post(
        "http://localhost:5000/cart",
        {
          name: product.name,
          price: product.price,
          image: product.image
        }
      );

      alert("Added To Cart");

    } catch (error) {

      console.log(error);

    }

  };

  const addReview = async () => {

    try {

      await axios.post(
        "http://localhost:5000/reviews",
        {
          productId: id,
          rating: Number(rating),
          comment
        }
      );

      const reviewRes =
        await axios.get(
          `http://localhost:5000/reviews/${id}`
        );

      setReviews(
        reviewRes.data
      );

      setRating("");
      setComment("");

      alert("Review Added");

    } catch (error) {

      console.log(error);

      alert("Failed To Add Review");

    }

  };

  if (!product) {

    return (

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>
          Loading Product...
        </h1>
      </div>

    );

  }

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
          background: "white",
          borderRadius: "20px",
          padding: "40px",
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >

        {/* Left Section */}

        <div>

          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "400px",
              height: "400px",
              objectFit: "cover",
              borderRadius: "15px"
            }}
          />

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              gap: "15px"
            }}
          >

            <button
              onClick={addToCart}
              style={{
                background: "#ff9f00",
                color: "white",
                border: "none",
                padding: "15px 25px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              🛒 Add To Cart
            </button>

            <button
              style={{
                background: "#fb641b",
                color: "white",
                border: "none",
                padding: "15px 25px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              ⚡ Buy Now
            </button>

          </div>

        </div>

        {/* Right Section */}

        <div
          style={{
            flex: 1,
            minWidth: "300px"
          }}
        >

          <h1>
            {product.name}
          </h1>

          <h2
            style={{
              color: "#388e3c"
            }}
          >
            ₹{product.price}
          </h2>

          <div
            style={{
              marginBottom: "15px",
              color: "#ff9800"
            }}
          >
            ⭐⭐⭐⭐☆ (4.2)
          </div>

          <p>
            <strong>
              Category:
            </strong>
            {" "}
            {product.category}
          </p>

          <hr />

          <h3>
            Description
          </h3>

          <p
            style={{
              lineHeight: "1.8"
            }}
          >
            {product.description}
          </p>

          <hr />

          <h3>
            Highlights
          </h3>

          <ul>
            <li>
              Premium Quality
            </li>
            <li>
              Fast Delivery
            </li>
            <li>
              Secure Payment
            </li>
            <li>
              Easy Returns
            </li>
          </ul>

        </div>

      </div>

      {/* Reviews */}

      <div
        style={{
          background: "white",
          padding: "30px",
          marginTop: "30px",
          borderRadius: "20px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >

        <h2>
          ⭐ Customer Reviews
        </h2>

        {reviews.length === 0 ? (

          <p>
            No Reviews Yet
          </p>

        ) : (

          reviews.map(
            (review) => (

              <div
                key={review._id}
                style={{
                  background:
                    "#f5f5f5",
                  padding: "15px",
                  marginBottom:
                    "12px",
                  borderRadius:
                    "10px"
                }}
              >

                <h4>
                  {"⭐".repeat(
                    review.rating
                  )}
                </h4>

                <p>
                  {review.comment}
                </p>

              </div>

            )
          )

        )}

      </div>

      {/* Add Review */}

      <div
        style={{
          background: "white",
          padding: "30px",
          marginTop: "30px",
          borderRadius: "20px",
          boxShadow:
            "0 4px 15px rgba(0,0,0,0.1)"
        }}
      >

        <h2>
          Write A Review
        </h2>

        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) =>
            setRating(
              e.target.value
            )
          }
          style={{
            width: "250px",
            padding: "12px",
            borderRadius: "8px",
            border:
              "1px solid #ddd",
            marginBottom:
              "15px"
          }}
        />

        <br />

        <textarea
          rows="5"
          placeholder="Write your review..."
          value={comment}
          onChange={(e) =>
            setComment(
              e.target.value
            )
          }
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: "10px",
            border:
              "1px solid #ddd"
          }}
        />

        <br />
        <br />

        <button
          onClick={addReview}
          style={{
            background: "#2874f0",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Submit Review
        </button>

      </div>

    </div>

  );

}

export default ProductDetails;