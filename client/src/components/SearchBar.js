function SearchBar() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search products..."
        style={{
          width: "60%",
          padding: "12px",
          borderRadius: "5px",
          border: "1px solid gray"
        }}
      />
    </div>
  );
}

export default SearchBar;