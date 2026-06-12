function Hero() {
  return (
    <div
      style={{
        height: "400px",
        background:
          "linear-gradient(to right, #2874f0, #00bcd4)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: "0 60px"
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "10px"
        }}
      >
        Welcome to ShopEZ
      </h1>

      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "10px"
        }}
      >
        Biggest Sale of the Year 🎉
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          marginBottom: "20px"
        }}
      >
        Shop Electronics, Mobiles, Fashion,
        Books and more at unbeatable prices.
      </p>

      <button
        style={{
          width: "180px",
          padding: "12px",
          background: "#ff9f00",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Hero;