import axios from "axios";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({
  id,
  name,
  price,
  image
}) {

  const addToCart = async () => {

    await axios.post(
      "http://localhost:5000/cart",
      {
        name,
        price,
        image
      }
    );

    alert("Added To Cart");
  };

  return (
    <div className="card">

      <Link
        to={`/product/${id}`}
        style={{
          textDecoration: "none",
          color: "black"
        }}
      >

        <img src={image} alt={name} />

        <div className="card-content">

          <h3>{name}</h3>

          <div className="rating">
            ⭐⭐⭐⭐☆
          </div>

          <div className="price">
            ₹{price}
          </div>

        </div>

      </Link>

      <button onClick={addToCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;