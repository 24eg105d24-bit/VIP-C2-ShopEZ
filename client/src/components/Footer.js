function Footer() {

  return (

    <footer
      style={{
        background: "#131921",
        color: "white",
        marginTop: "60px",
        padding: "50px 40px 20px"
      }}
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "40px"
        }}
      >

        {/* Brand */}

        <div>

          <h2
            style={{
              color: "#ff9900",
              marginBottom: "15px"
            }}
          >
            ShopEZ
          </h2>

          <p
            style={{
              color: "#ccc",
              lineHeight: "1.8"
            }}
          >
            Your one-stop destination for
            electronics, fashion, beauty,
            books and much more.
          </p>

        </div>

        {/* About */}

        <div>

          <h3>About Us</h3>

          <p>Company</p>
          <p>Careers</p>
          <p>Press</p>
          <p>Investors</p>

        </div>

        {/* Help */}

        <div>

          <h3>Customer Service</h3>

          <p>Payments</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>FAQ</p>

        </div>

        {/* Contact */}

        <div>

          <h3>Contact Us</h3>

          <p>📧 support@shopez.com</p>

          <p>📞 +91 9876543210</p>

          <p>📍 Hyderabad, India</p>

        </div>

      </div>

      <hr
        style={{
          margin: "30px 0",
          borderColor: "#333"
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "15px",
          color: "#bbb"
        }}
      >

        <p>
          © 2026 ShopEZ. All Rights Reserved.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px"
          }}
        >
          <span>🌐 Facebook</span>
          <span>📷 Instagram</span>
          <span>🐦 Twitter</span>
          <span>▶ YouTube</span>
        </div>

      </div>

    </footer>

  );

}

export default Footer;