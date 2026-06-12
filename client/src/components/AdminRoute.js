import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (
    email !== "24eg105d24@anurag.edu.in"
  ) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
          color: "red"
        }}
      >
        Access Denied
      </h1>
    );
  }

  return children;
}

export default AdminRoute;