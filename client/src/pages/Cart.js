import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Cart() {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/cart")
      .then((res) => {

        console.log(res.data);

        setCartItems(res.data);

      })
      .catch((err) => {

        console.log(err);

      });

  }, []);

  const removeItem = async (id) => {

    await axios.delete(
      `http://localhost:5000/cart/${id}`
    );

    setCartItems(
      cartItems.filter(
        item => item._id !== id
      )
    );
  };
const totalPrice = cartItems.reduce(
  (total, item) => total + item.price,
  0
);
  return (
    <div style={{ padding: "20px" }}>
      <h1>My Cart</h1>
      <h2>Total Price: ₹{totalPrice}</h2>

      {cartItems.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ddd",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button onClick={() => removeItem(item._id)}>
            Remove
          </button>
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      ))}
    </div>
  );
}


export default Cart;