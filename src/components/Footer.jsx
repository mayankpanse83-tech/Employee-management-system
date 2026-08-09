function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#0f172a",
      color: "#ffffff",
      height: "60px",
      marginLeft: "250px", // Sidebar की width
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      borderTop: "1px solid #334155",
      marginTop: "30px",
    },

    text: {
      margin: 0,
      letterSpacing: "0.5px",
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2026 Employee Management System | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;