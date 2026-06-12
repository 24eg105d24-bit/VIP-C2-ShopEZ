import { useState } from "react";
import axios from "axios";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {

    try {

      await axios.post(
        "http://localhost:5000/users/register",
        {
          name,
          email,
          password
        }
      );

      alert("Registration Successful");

      window.location.href = "/login";

    } catch (error) {

      alert(
        error?.response?.data?.message ||
        "Registration Failed"
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
          "linear-gradient(135deg,#ff9800,#ff5722)"
      }}
    >

      <div
        style={{
          width: "950px",
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
              "linear-gradient(135deg,#ff9800,#ff5722)",
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
            Join Us Today 🚀
          </h2>

          <p
            style={{
              marginTop: "10px",
              lineHeight: "1.8"
            }}
          >
            Create your account and enjoy
            seamless shopping, secure
            payments, fast delivery and
            exciting offers.
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
            Create Account
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
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
            onClick={registerUser}
            style={{
              width: "100%",
              padding: "15px",
              background: "#ff5722",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold"
            }}
          >
            Create Account
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "20px",
              color: "#666"
            }}
          >
            Start Shopping Today 🛒
          </p>

        </div>

      </div>

    </div>

  );
}

export default Register;