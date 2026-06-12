import axios from "axios";

function Checkout() {

  const placeOrder = async () => {

    const cartItems =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    const totalAmount =
      cartItems.reduce(
        (total, item) =>
          total + item.price,
        0
      );
console.log("Calling:", "http://localhost:5000/orders/place");
    await axios.post(
      "http://localhost:5000/orders/place",
      {
        items: cartItems,
        totalAmount
      }
    );

    alert(
      "Order Placed Successfully"
    );
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Checkout</h1>

      <button onClick={placeOrder}>
        Place Order
      </button>

    </div>
  );
}

export default Checkout;