import React, { useState } from "react";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage(`Password reset link has been sent to ${email}.`);
  };

  // Inline CSS Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f7fafc",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(46, 5, 58, 0.15)",
    width: "100%",
    maxWidth: "400px",
    border: "2px solidrgb(39, 73, 95)", // Added border to the form
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50", // Dark text color for the heading
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "20px",
    border: "2px solid rgb(110, 187, 238)", // Added border to input
    borderRadius: "4px",
    fontSize: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow to input
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  const inputFocusStyle = {
    borderColor: "#2980b9", // Darker blue when focused
    boxShadow: "0 4px 8px rgba(41, 128, 185, 0.3)", // Shadow when focused
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Added shadow to button
    transition: "all 0.3s ease",
  };

  const messageStyle = {
    textAlign: "center",
    color: "#e74c3c",
    marginTop: "15px",
  };

  // Handling input focus and blur for styling
  const handleInputFocus = (e) => {
    e.target.style.borderColor = "#2980b9";
    e.target.style.boxShadow = "0 4px 8px rgba(41, 128, 185, 0.3)";
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = "#3498db";
    e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={headingStyle}>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              style={inputStyle}
              placeholder="Enter your email"
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2980b9")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#3498db")}
          >
            Reset Link
          </button>
          {message && <p style={messageStyle}>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordForm;
