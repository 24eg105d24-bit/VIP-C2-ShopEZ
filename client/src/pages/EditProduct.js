import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function EditProduct() {

  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] =
    useState("");

  useEffect(() => {

    axios
      .get(
        `http://localhost:5000/products/${id}`
      )
      .then((res) => {

        setName(res.data.name);
        setPrice(res.data.price);
        setImage(res.data.image);
        setCategory(res.data.category);
        setDescription(
          res.data.description
        );

      });

  }, [id]);

  const updateProduct = async () => {

    await axios.put(
      `http://localhost:5000/products/${id}`,
      {
        name,
        price,
        image,
        category,
        description
      }
    );

    alert("Product Updated");

  };

  return (
    <div style={{ padding: "30px" }}>

      <h1>Edit Product</h1>

      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <input
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
      />

      <br /><br />

      <input
        value={image}
        onChange={(e) =>
          setImage(e.target.value)
        }
      />

      <br /><br />

      <input
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      />

      <br /><br />

      <textarea
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <br /><br />

      <button onClick={updateProduct}>
        Update Product
      </button>

    </div>
  );
}

export default EditProduct;