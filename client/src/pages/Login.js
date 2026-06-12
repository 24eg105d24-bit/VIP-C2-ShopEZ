import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/users/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "email",
        email
      );

      localStorage.setItem(
        "role",
        res.data.role
      );

      alert("Login Successful");

      window.location.href = "/";

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "Invalid Credentials"
      );

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#2874f0,#00bcd4)"
      }}
    >

      <div
        style={{
          width: "900px",
          background: "white",
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          boxShadow:
            "0 10px 40px rgba(0,0,0,0.2)"
        }}
      >

        <div
          style={{
            flex: 1,
            background:
              "linear-gradient(135deg,#2874f0,#0052cc)",
            color: "white",
            padding: "50px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >

          <h1
            style={{
              fontSize: "42px",
              marginBottom: "15px"
            }}
          >
            ShopEZ
          </h1>

          <h2>
            Welcome Back 👋
          </h2>

          <p
            style={{
              marginTop: "10px",
              lineHeight: "1.8"
            }}
          >
            Login to access your cart,
            orders, wishlist and exclusive
            offers.
          </p>

        </div>

        <div
          style={{
            flex: 1,
            padding: "50px"
          }}
        >

          <h2
            style={{
              textAlign: "center",
              marginBottom: "30px"
            }}
          >
            Login Account
          </h2>

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "15px"
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "15px",
              marginBottom: "25px",
              borderRadius: "10px",
              border: "1px solid #ddd",
              fontSize: "15px"
            }}
          />

          <button
            onClick={loginUser}
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
            Login
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#666"
            }}
          >
            Welcome to ShopEZ 🚀
          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;