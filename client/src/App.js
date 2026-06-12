import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
//import ProtectedRoute from "./components/ProtectedRoute";
import ProductDetails from "./pages/ProductDetails";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import EditProduct from "./pages/EditProduct";
import Profile from "./pages/Profile";
import AdminRoute from "./components/AdminRoute";
function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route
  path="/orders"
  element={<Orders />}
/>
        <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
/>
        <Route
  path="/admin/add-product"
  element={
    <AdminRoute>
      <AddProduct />
    </AdminRoute>
  }
/>
        <Route
  path="/admin/products"
  element={
    <AdminRoute>
      <AdminProducts />
    </AdminRoute>
  }
/>
        <Route
  path="/admin/orders"
  element={
    <AdminRoute>
      <AdminOrders />
    </AdminRoute>
  }
/>
<Route
  path="/admin/edit-product/:id"
  element={
    <AdminRoute>
      <EditProduct />
    </AdminRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;