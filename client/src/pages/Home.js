import { useEffect, useState } from "react";
import axios from "axios";

//import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
//import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
 const [products, setProducts] = useState([]);
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 const filteredProducts = products.filter((product) => {

  const matchesSearch =
    product.name
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchesCategory =
    category === "All"
      ? true
      : product.category === category;

  return matchesSearch && matchesCategory;

});

  return (
    <>
      <Hero />
      <div style={{ padding: "20px" }}>
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) =>
      setSearch(e.target.value)
    }
    style={{
      width: "100%",
      padding: "10px",
      fontSize: "16px"
    }}
  />
</div>
      <Categories setCategory={setCategory} />
      
      <h2 style={{ padding: "20px" }}>
        Featured Products
      </h2>

      <div
  style={{
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px"
  }}
>
        {filteredProducts.map((product) => (
          <ProductCard
  key={product._id}
  id={product._id}
  name={product.name}
  price={product.price}
  image={product.image}
  category={product.category}
  description={product.description}
/>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;