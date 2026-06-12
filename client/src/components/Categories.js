function Categories({ setCategory }) {

  const categories = [
    { name: "All", icon: "🛍️" },
    { name: "Electronics", icon: "💻" },
    { name: "Fashion", icon: "👕" },
    { name: "Mobiles", icon: "📱" },
    { name: "Shoes", icon: "👟" },
    { name: "Beauty", icon: "💄" },
    { name: "Books", icon: "📚" }
  ];

  return (
    <div
      style={{
        padding: "30px",
        background: "#f1f3f6"
      }}
    >
      <h2
        style={{
          marginBottom: "20px"
        }}
      >
        Shop By Category
      </h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {categories.map((category, index) => (

          <div
            key={index}
            onClick={() =>
              setCategory(category.name)
            }
            style={{
              width: "140px",
              height: "120px",
              background: "white",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)",
              transition: "0.3s"
            }}
          >
            <div
              style={{
                fontSize: "35px"
              }}
            >
              {category.icon}
            </div>

            <h4>{category.name}</h4>

          </div>

        ))}
      </div>
    </div>
  );
}

export default Categories;