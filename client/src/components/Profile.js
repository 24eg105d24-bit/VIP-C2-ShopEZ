
function Profile() {
  return (
    <Layout>
      <div style={{ padding: "20px" }}>
        <h1>My Profile</h1>

        <p>Welcome to ShopEZ</p>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "300px",
            marginTop: "20px"
          }}
        >
          <h3>User Information</h3>

          <p>Name: User</p>

          <p>Email: user@example.com</p>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;